import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address'
import { id } from '@yield-protocol/utils'

import { Pool } from '../typechain/Pool'
import { PoolFactory } from '../typechain/PoolFactory'
import { BaseMock as Base } from '../typechain/BaseMock'
import { FYTokenMock as FYToken } from '../typechain/FYTokenMock'
import { YieldSpaceEnvironment } from './shared/fixtures'

import { BigNumber } from 'ethers'

import { ethers, waffle } from 'hardhat'
import { expect } from 'chai'
const { loadFixture } = waffle

const timeMachine = require('ether-time-traveler')

describe('Pool - set', async function () {
  this.timeout(0)

  let snapshotId: string
  let ownerAcc: SignerWithAddress
  let owner: string

  let yieldSpace: YieldSpaceEnvironment
  let factory: PoolFactory

  let pool: Pool

  const baseId = ethers.utils.hexlify(ethers.utils.randomBytes(6))
  const fyTokenId = ethers.utils.hexlify(ethers.utils.randomBytes(6))

  async function fixture() {
    return await YieldSpaceEnvironment.setup(ownerAcc, [baseId], [fyTokenId], BigNumber.from('100'))
  }

  before(async () => {
    snapshotId = await timeMachine.takeSnapshot(ethers.provider)

    const signers = await ethers.getSigners()
    ownerAcc = signers[0]
    owner = ownerAcc.address
  })

  after(async () => {
    await timeMachine.revertToSnapshot(ethers.provider, snapshotId)
  })

  beforeEach(async () => {
    yieldSpace = await loadFixture(fixture)
    factory = yieldSpace.factory as PoolFactory
    pool = (yieldSpace.pools.get(baseId) as Map<string, Pool>).get(fyTokenId) as Pool
  })

  it('Sets parameters', async () => {
    const k = ethers.utils.formatBytes32String('k')
    const g1 = ethers.utils.formatBytes32String('g1')
    const g2 = ethers.utils.formatBytes32String('g2')
    const invalid = ethers.utils.formatBytes32String('invalid')

    expect(await pool.setParameter(k, 1)).to.emit(pool, 'ParameterSet').withArgs(k, 1)
    expect(await pool.k()).to.equal(1)

    expect(await pool.setParameter(g1, 1)).to.emit(pool, 'ParameterSet').withArgs(g1, 1)
    expect(await pool.g1()).to.equal(1)

    expect(await pool.setParameter(g2, 1)).to.emit(pool, 'ParameterSet').withArgs(g2, 1)
    expect(await pool.g2()).to.equal(1)

    await expect(pool.setParameter(invalid, 1)).to.be.revertedWith('Pool: Unrecognized parameter')
  })
})