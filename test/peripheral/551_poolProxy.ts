const Pool = artifacts.require('Pool');
const LiquidityProxy = artifacts.require('LiquidityProxy');


// @ts-ignore
import helper from 'ganache-time-traveler';
import { CHAI, toWad, toRay, mulRay } from '../shared/utils';
import { YieldEnvironmentLite, Contract } from "../shared/fixtures";
// @ts-ignore
import { BN, expectRevert } from '@openzeppelin/test-helpers';
import { assert, expect } from 'chai';

contract('LiquidityProxy', async (accounts) =>  {
    let [ owner, user1, operator, user2, to ] = accounts;

    // These values impact the pool results
    const rate1 = toRay(1.4);
    const daiDebt1 = toWad(96);
    const daiTokens1 = mulRay(daiDebt1, rate1);
    const yDaiTokens1 = daiTokens1;

    const oneToken = toWad(1);
    const initialDai = daiTokens1;

    let snapshot: any;
    let snapshotId: string;

    let env: YieldEnvironmentLite;
    let controller: Contract;
    let chai: Contract;

    let dai: Contract;
    let pool: Contract;
    let yDai1: Contract;
    let proxy: Contract;
    let treasury: Contract;
    

    let maturity1: number;

    beforeEach(async() => {
        snapshot = await helper.takeSnapshot();
        snapshotId = snapshot['result'];

        env = await YieldEnvironmentLite.setup();
        dai = env.maker.dai;
        chai = env.maker.chai;
        dai = env.maker.dai;
        controller = env.controller;
        treasury = env.treasury;

        // Setup yDai
        const block = await web3.eth.getBlockNumber();
        maturity1 = (await web3.eth.getBlock(block)).timestamp + 31556952; // One year
        yDai1 = await env.newYDai(maturity1, "Name", "Symbol");

        // Setup Pool
        pool = await Pool.new(
            dai.address,
            yDai1.address,
            "Name",
            "Symbol",
            { from: owner }
        );

        // Allow owner to mint yDai the sneaky way, without recording a debt in controller
        await yDai1.orchestrate(owner, { from: owner });

        // Setup LiquidityProxy
        proxy = await LiquidityProxy.new(
            controller.address,
            chai.address,
            dai.address,
            yDai1.address,
            pool.address,
            treasury.address,
            { from: owner }
        )

    });

    afterEach(async() => {
        await helper.revertToSnapshot(snapshotId);
    });


    it("get the size of the contract", async() => {
        console.log();
        console.log("    ·--------------------|------------------|------------------|------------------·");
        console.log("    |  Contract          ·  Bytecode        ·  Deployed        ·  Constructor     |");
        console.log("    ·····················|··················|··················|···················");
        
        const bytecode = proxy.constructor._json.bytecode;
        const deployed = proxy.constructor._json.deployedBytecode;
        const sizeOfB  = bytecode.length / 2;
        const sizeOfD  = deployed.length / 2;
        const sizeOfC  = sizeOfB - sizeOfD;
        console.log(
            "    |  " + (proxy.constructor._json.contractName).padEnd(18, ' ') +
            "|" + ("" + sizeOfB).padStart(16, ' ') + "  " +
            "|" + ("" + sizeOfD).padStart(16, ' ') + "  " +
            "|" + ("" + sizeOfC).padStart(16, ' ') + "  |");
        console.log("    ·--------------------|------------------|------------------|------------------·");
        console.log();
    });


    describe("with initial liquidity", () => {
        beforeEach(async() => {
            await env.maker.getDai(user1, initialDai, rate1);
            await dai.approve(pool.address, initialDai, { from: user1 });
            await pool.init(initialDai, { from: user1 });
            const additionalYDaiReserves = toWad(34.4);
            await yDai1.mint(operator, additionalYDaiReserves, { from: owner });
            await yDai1.approve(pool.address, additionalYDaiReserves, { from: operator });
            await pool.sellYDai(operator, operator, additionalYDaiReserves, { from: operator });
        });

        it("mints liquidity tokens with Proxy", async() => {
            const oneToken = toWad(1);

            const poolTokensBefore = new BN(await pool.balanceOf(user2));
            const expectedMinted = new BN('984749191303759738');
            const expectedCollateral = new BN('210040750129274150');
            const expectedDebt = new BN('252048900155128980');

            await dai.mint(user2, oneToken, { from: owner });
            await dai.approve(proxy.address, oneToken, { from: user2 });
            await controller.addDelegate(proxy.address, { from: user2 });
            const tx = await proxy.addLiquidity(user2, oneToken, { from: user2 });

            const minted = (new BN(await pool.balanceOf(user2))).sub(poolTokensBefore);
            const collateral = new BN(await controller.posted(CHAI, user2));
            const debt = new BN(await controller.debtYDai(CHAI, maturity1, user2));

            //asserts
            assert.equal(
                minted.toString(),
                expectedMinted,
                "User1 should have pool Tokens"
            );

            assert.equal(
                collateral.toString(),
                expectedCollateral,
                "User1 should have posted Collateral"
            );

            console.log(debt.toString());
            console.log((expectedMinted.add(debt)).toString());      
            assert.equal(
                debt.toString(),
                expectedDebt,
                "User1 should have Debt"
            );
            //console.log(collateral.toString());
            

        });   
    });
});
