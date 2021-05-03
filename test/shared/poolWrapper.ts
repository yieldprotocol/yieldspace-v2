import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { BigNumber, BigNumberish, ContractTransaction } from 'ethers'
import { Pool } from '../../typechain/Pool'
import { sellBase, sellFYToken, buyBase, buyFYToken, mint, mintWithBase, burn, burnForBase } from './yieldspace'
import { ethers } from 'hardhat'

async function currentTimestamp() {
  return (await ethers.provider.getBlock('latest')).timestamp
}

export class BatchAction {
  op: BigNumberish
  data: string

  constructor(op: BigNumberish, data: string) {
    this.op = op
    this.data = data
  }
}

export class PoolWrapper {
  pool: Pool
  address: string

  constructor(pool: Pool) {
    this.pool = pool
    this.address = pool.address
  }

  public static async setup(pool: Pool) {
    return new PoolWrapper(pool)
  }

  public connect(account: SignerWithAddress): PoolWrapper {
    return new PoolWrapper(this.pool.connect(account))
  }

  public async sellBaseToken(receiver: string, min: BigNumberish): Promise<ContractTransaction> {
    return this.pool.sellBaseToken(receiver, min)
  }

  public async sellBaseTokenOffChain(): Promise<BigNumber> {
    return sellBase(
      await this.pool.getBaseTokenReserves(),
      await this.pool.getFYTokenReserves(),
      (await this.pool.getBaseTokenReserves()).sub((await this.pool.getStoredReserves())[0]),
      BigNumber.from(await this.pool.maturity()).sub(await currentTimestamp()),
    )
  }

  public async sellFYToken(receiver: string, min: BigNumberish): Promise<ContractTransaction> {
    return this.pool.sellFYToken(receiver, min)
  }

  public async sellFYTokenOffChain(): Promise<BigNumber> {
    return sellFYToken(
      await this.pool.getBaseTokenReserves(),
      await this.pool.getFYTokenReserves(),
      (await this.pool.getFYTokenReserves()).sub((await this.pool.getStoredReserves())[1]),
      BigNumber.from(await this.pool.maturity()).sub(await currentTimestamp()),
    )
  }

  public async buyBaseToken(receiver: string, tokenOut: BigNumberish, max: BigNumberish): Promise<ContractTransaction> {
    return this.pool.buyBaseToken(receiver, tokenOut, max)
  }

  public async buyBaseTokenOffChain(tokenOut: BigNumberish): Promise<BigNumber> {
    return buyBase(
      await this.pool.getBaseTokenReserves(),
      await this.pool.getFYTokenReserves(),
      BigNumber.from(tokenOut),
      BigNumber.from(await this.pool.maturity()).sub(await currentTimestamp()),
    )
  }

  public async buyFYToken(receiver: string, tokenOut: BigNumberish, max: BigNumberish): Promise<ContractTransaction> {
    return this.pool.buyFYToken(receiver, tokenOut, max)
  }
  
  public async buyFYTokenOffChain(tokenOut: BigNumberish): Promise<BigNumber> {
    return buyFYToken(
      await this.pool.getBaseTokenReserves(),
      await this.pool.getFYTokenReserves(),
      BigNumber.from(tokenOut),
      BigNumber.from(await this.pool.maturity()).sub(await currentTimestamp()),
    )
  }

  public async mintWithBaseToken(receiver: string, fyTokenToBuy: BigNumberish, minTokensMinted: BigNumberish): Promise<ContractTransaction> {
    return this.pool.mintWithBaseToken(receiver, fyTokenToBuy, minTokensMinted)
  }

  public async burnForBaseToken(receiver: string, minBaseTokenOut: BigNumberish): Promise<ContractTransaction> {
    return this.pool.burnForBaseTokenAction(receiver, minBaseTokenOut)
  }
}
  