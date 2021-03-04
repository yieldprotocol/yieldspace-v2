/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { YieldMath } from "../YieldMath";

export class YieldMath__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<YieldMath> {
    return super.deploy(overrides || {}) as Promise<YieldMath>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): YieldMath {
    return super.attach(address) as YieldMath;
  }
  connect(signer: Signer): YieldMath__factory {
    return super.connect(signer) as YieldMath__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldMath {
    return new Contract(address, _abi, signerOrProvider) as YieldMath;
  }
}

const _abi = [
  {
    inputs: [],
    name: "MAX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "daiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "timeTillMaturity",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "k",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "g",
        type: "int128",
      },
    ],
    name: "daiInForFYDaiOut",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "daiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "timeTillMaturity",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "k",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "g",
        type: "int128",
      },
    ],
    name: "daiOutForFYDaiIn",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "daiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "daiAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "timeTillMaturity",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "k",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "g",
        type: "int128",
      },
    ],
    name: "fyDaiInForDaiOut",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "daiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "daiAmount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "timeTillMaturity",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "k",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "g",
        type: "int128",
      },
    ],
    name: "fyDaiOutForDaiIn",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "daiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fyDaiReserves",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "timeTillMaturity",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "k",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "c0",
        type: "int128",
      },
    ],
    name: "initialReservesValue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6126b1610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c8063c2ee3a0811610065578063c2ee3a08146101bb578063d49d5181146101c3578063d536aadd146101dd578063e5cd1e731461023957610087565b80631d385c1f1461008c578063420df2f41461010d578063763dc40514610169575b600080fd5b6100e8600480360360c08110156100a257600080fd5b506fffffffffffffffffffffffffffffffff8135811691602081013582169160408201358116916060810135909116906080810135600f90810b9160a00135900b610295565b604080516fffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100e8600480360360c081101561012357600080fd5b506fffffffffffffffffffffffffffffffff8135811691602081013582169160408201358116916060810135909116906080810135600f90810b9160a00135900b6104ed565b6100e8600480360360a081101561017f57600080fd5b506fffffffffffffffffffffffffffffffff81358116916020810135821691604082013516906060810135600f90810b9160800135900b61076f565b6100e86108f8565b6101cb610905565b60408051918252519081900360200190f35b6100e8600480360360c08110156101f357600080fd5b506fffffffffffffffffffffffffffffffff8135811691602081013582169160408201358116916060810135909116906080810135600f90810b9160a00135900b610919565b6100e8600480360360c081101561024f57600080fd5b506fffffffffffffffffffffffffffffffff8135811691602081013582169160408201358116916060810135909116906080810135600f90810b9160a00135900b610ad6565b6000806102a3858585610d00565b905060006102cd6fffffffffffffffffffffffffffffffff8a168368010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691506000906102fc908a168468010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691508a8116898216019081111561038857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f5969656c644d6174683a20546f6f206d7563682064616920696e000000000000604482015290519081900360640190fd5b60006103b06fffffffffffffffffffffffffffffffff83168668010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff908116915084840182900390811115610425576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806125bb6026913960400191505060405180910390fd5b600061044d6fffffffffffffffffffffffffffffffff83166801000000000000000089610eaf565b6fffffffffffffffffffffffffffffffff9081168e82160391508111156104bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061265b6021913960400191505060405180910390fd5b64e8d4a5100081116104d25760006104db565b64e8d4a5100081035b9e9d5050505050505050505050505050565b6000806104fb858585610d00565b905060006105256fffffffffffffffffffffffffffffffff8a168368010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff9081169150600090610554908a168468010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691508881168b821603908111156105e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f5969656c644d6174683a20546f6f206d75636820646169206f75740000000000604482015290519081900360640190fd5b60006106086fffffffffffffffffffffffffffffffff83168668010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691508484018290039081111561067d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806125e1602c913960400191505060405180910390fd5b60006fffffffffffffffffffffffffffffffff808e16906106aa908416680100000000000000008a610eaf565b6fffffffffffffffffffffffffffffffff160390506fffffffffffffffffffffffffffffffff801681111561072a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061265b6021913960400191505060405180910390fd5b6fffffffffffffffffffffff172b5aefff8110610757576fffffffffffffffffffffffffffffffff6104db565b64e8d4a51000019d9c50505050505050505050505050565b600080610792600f84900b6fffffffffffffffffffffffffffffffff8916610fad565b90506fffffffffffffffffffffffffffffffff8111156107b157600080fd5b60006107ef6107df6107d4886fffffffffffffffffffffffffffffffff16611031565b600f88900b9061104f565b68010000000000000000906110a7565b9050600081600f0b1361080157600080fd5b6000600161082b6fffffffffffffffffffffffffffffffff8a168468010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff908116906108569086168568010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff1601901c90506fffffffffffffffffffffffffffffffff801681111561088c57600080fd5b600060016108b66fffffffffffffffffffffffffffffffff84166801000000000000000086610eaf565b6fffffffffffffffffffffffffffffffff16901b90506fffffffffffffffffffffffffffffffff80168111156108eb57600080fd5b9998505050505050505050565b6801000000000000000081565b6fffffffffffffffffffffffffffffffff81565b600080610927858585610d00565b905060006109516fffffffffffffffffffffffffffffffff8a168368010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff9081169150600090610980908a168468010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691508881168a82160390811115610a0c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5969656c644d6174683a20546f6f206d756368206679446169206f7574000000604482015290519081900360640190fd5b6000610a346fffffffffffffffffffffffffffffffff83168668010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff908116915084840182900390811115610aa9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612631602a913960400191505060405180910390fd5b60006fffffffffffffffffffffffffffffffff808f16906106aa908416680100000000000000008a610eaf565b600080610ae4858585610d00565b90506000610b0e6fffffffffffffffffffffffffffffffff8a168368010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff9081169150600090610b3d908a168468010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff90811691508981168982160190811115610bc957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f5969656c644d6174683a20546f6f206d75636820667944616920696e00000000604482015290519081900360640190fd5b6000610bf16fffffffffffffffffffffffffffffffff83168668010000000000000000610eaf565b6fffffffffffffffffffffffffffffffff908116915084840182900390811115610c66576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061260d6024913960400191505060405180910390fd5b6000610c8e6fffffffffffffffffffffffffffffffff83166801000000000000000089610eaf565b6fffffffffffffffffffffffffffffffff9081168f82160391508111156104bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061265b6021913960400191505060405180910390fd5b600080610d2c610d21866fffffffffffffffffffffffffffffffff16611031565b600f86900b9061104f565b9050600081600f0b1215610da157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5969656c644d6174683a2074206d75737420626520706f736974697665000000604482015290519081900360640190fd5b6000610db46107df600f86900b8461104f565b9050600081600f0b13610e2857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f5969656c644d6174683a20546f6f206661722066726f6d206d61747572697479604482015290519081900360640190fd5b68010000000000000000600f82900b1315610ea457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5969656c644d6174683a2067206d75737420626520706f736974697665000000604482015290519081900360640190fd5b9150505b9392505050565b60006fffffffffffffffffffffffffffffffff8216610ecd57600080fd5b6fffffffffffffffffffffffffffffffff8416610f08576fffffffffffffffffffffffffffffffff8316610f0057600080fd5b506000610ea8565b6000826fffffffffffffffffffffffffffffffff16846fffffffffffffffffffffffffffffffff16610f39876110fb565b6fffffffffffffffffffffffffffffffff036fffffffffffffffffffffffffffffffff160281610f6557fe5b0490506fffffffffffffffffffffffffffffffff811115610f8a576000915050610ea8565b610fa5816fffffffffffffffffffffffffffffffff03611c24565b915050610ea8565b600081610fbc5750600061102b565b600083600f0b1215610fcd57600080fd5b600f83900b6fffffffffffffffffffffffffffffffff8316810260401c90608084901c0277ffffffffffffffffffffffffffffffffffffffffffffffff81111561101657600080fd5b60401b811981111561102757600080fd5b0190505b92915050565b6000677fffffffffffffff82111561104857600080fd5b5060401b90565b6000600f83810b9083900b0260401d7fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061109e57506f7fffffffffffffffffffffffffffffff8113155b610ea857600080fd5b6000600f82810b9084900b037fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061109e57506f7fffffffffffffffffffffffffffffff811315610ea857600080fd5b60006fffffffffffffffffffffffffffffffff821661111957600080fd5b6fffffffffffffffffffffffffffffffff82166ffe000000000000000000000000000000680100000000000000008210156111785760409190911b907fffffffffffffffffffffffffffffffff80000000000000000000000000000000015b6c010000000000000000000000008210156111b75760209190911b907fffffffffffffffffffffffffffffffffc0000000000000000000000000000000015b6e0100000000000000000000000000008210156111f85760109190911b907fffffffffffffffffffffffffffffffffe0000000000000000000000000000000015b6f0100000000000000000000000000000082101561123a5760089190911b907ffffffffffffffffffffffffffffffffff0000000000000000000000000000000015b6f1000000000000000000000000000000082101561127c5760049190911b907ffffffffffffffffffffffffffffffffff8000000000000000000000000000000015b6f400000000000000000000000000000008210156112be5760029190911b907ffffffffffffffffffffffffffffffffffc000000000000000000000000000000015b6f800000000000000000000000000000008210156113005760019190911b907ffffffffffffffffffffffffffffffffffe000000000000000000000000000000015b908002607f1c90600160801b82111561132d5760019190911c906f01000000000000000000000000000000175b908002607f1c90600160801b8211156113595760019190911c906e800000000000000000000000000000175b908002607f1c90600160801b8211156113855760019190911c906e400000000000000000000000000000175b908002607f1c90600160801b8211156113b15760019190911c906e200000000000000000000000000000175b908002607f1c90600160801b8211156113dd5760019190911c906e100000000000000000000000000000175b908002607f1c90600160801b8211156114095760019190911c906e080000000000000000000000000000175b908002607f1c90600160801b8211156114355760019190911c906e040000000000000000000000000000175b908002607f1c90600160801b8211156114615760019190911c906e020000000000000000000000000000175b908002607f1c90600160801b82111561148d5760019190911c906e010000000000000000000000000000175b908002607f1c90600160801b8211156114b85760019190911c906d8000000000000000000000000000175b908002607f1c90600160801b8211156114e35760019190911c906d4000000000000000000000000000175b908002607f1c90600160801b82111561150e5760019190911c906d2000000000000000000000000000175b908002607f1c90600160801b8211156115395760019190911c906d1000000000000000000000000000175b908002607f1c90600160801b8211156115645760019190911c906d0800000000000000000000000000175b908002607f1c90600160801b82111561158f5760019190911c906d0400000000000000000000000000175b908002607f1c90600160801b8211156115ba5760019190911c906d0200000000000000000000000000175b908002607f1c90600160801b8211156115e55760019190911c906d0100000000000000000000000000175b908002607f1c90600160801b82111561160f5760019190911c906c80000000000000000000000000175b908002607f1c90600160801b8211156116395760019190911c906c40000000000000000000000000175b908002607f1c90600160801b8211156116635760019190911c906c20000000000000000000000000175b908002607f1c90600160801b82111561168d5760019190911c906c10000000000000000000000000175b908002607f1c90600160801b8211156116b75760019190911c906c08000000000000000000000000175b908002607f1c90600160801b8211156116e15760019190911c906c04000000000000000000000000175b908002607f1c90600160801b82111561170b5760019190911c906c02000000000000000000000000175b908002607f1c90600160801b8211156117355760019190911c906c01000000000000000000000000175b908002607f1c90600160801b82111561175e5760019190911c906b800000000000000000000000175b908002607f1c90600160801b8211156117875760019190911c906b400000000000000000000000175b908002607f1c90600160801b8211156117b05760019190911c906b200000000000000000000000175b908002607f1c90600160801b8211156117d95760019190911c906b100000000000000000000000175b908002607f1c90600160801b8211156118025760019190911c906b080000000000000000000000175b908002607f1c90600160801b82111561182b5760019190911c906b040000000000000000000000175b908002607f1c90600160801b8211156118545760019190911c906b020000000000000000000000175b908002607f1c90600160801b82111561187d5760019190911c906b010000000000000000000000175b908002607f1c90600160801b8211156118a55760019190911c906a8000000000000000000000175b908002607f1c90600160801b8211156118cd5760019190911c906a4000000000000000000000175b908002607f1c90600160801b8211156118f55760019190911c906a2000000000000000000000175b908002607f1c90600160801b82111561191d5760019190911c906a1000000000000000000000175b908002607f1c90600160801b8211156119455760019190911c906a0800000000000000000000175b908002607f1c90600160801b82111561196d5760019190911c906a0400000000000000000000175b908002607f1c90600160801b8211156119955760019190911c906a0200000000000000000000175b908002607f1c90600160801b8211156119bd5760019190911c906a0100000000000000000000175b908002607f1c90600160801b8211156119e45760019190911c906980000000000000000000175b908002607f1c90600160801b821115611a0b5760019190911c906940000000000000000000175b908002607f1c90600160801b821115611a325760019190911c906920000000000000000000175b908002607f1c90600160801b821115611a595760019190911c906910000000000000000000175b908002607f1c90600160801b821115611a805760019190911c906908000000000000000000175b908002607f1c90600160801b821115611aa75760019190911c906904000000000000000000175b908002607f1c90600160801b821115611ace5760019190911c906902000000000000000000175b908002607f1c90600160801b821115611af55760019190911c906901000000000000000000175b908002607f1c90600160801b821115611b1b5760019190911c9068800000000000000000175b908002607f1c90600160801b821115611b415760019190911c9068400000000000000000175b908002607f1c90600160801b821115611b675760019190911c9068200000000000000000175b908002607f1c90600160801b821115611b8d5760019190911c9068100000000000000000175b908002607f1c90600160801b821115611bb35760019190911c9068080000000000000000175b908002607f1c90600160801b821115611bd95760019190911c9068040000000000000000175b908002607f1c90600160801b821115611bff5760019190911c9068020000000000000000175b908002607f1c90600160801b821115610ea85768010000000000000000179392505050565b60006f800000000000000000000000000000006f01000000000000000000000000000000831615611c65576fb504f333f9de6484597d89b3754abe9f02607f1c5b6e800000000000000000000000000000831615611c92576f9837f0518db8a96f46ad23182e42f6f602607f1c5b6e400000000000000000000000000000831615611cbf576f8b95c1e3ea8bd6e6fbe4628758a53c9002607f1c5b6e200000000000000000000000000000831615611cec576f85aac367cc487b14c5c95b8c2154c1b202607f1c5b6e100000000000000000000000000000831615611d19576f82cd8698ac2ba1d73e2a475b46520bff02607f1c5b6e080000000000000000000000000000831615611d46576f8164d1f3bc0307737be56527bd14def402607f1c5b6e040000000000000000000000000000831615611d73576f80b1ed4fd999ab6c25335719b6e6fd2002607f1c5b6e020000000000000000000000000000831615611da0576f8058d7d2d5e5f6b094d589f608ee4aa202607f1c5b6e010000000000000000000000000000831615611dcd576f802c6436d0e04f50ff8ce94a6797b3ce02607f1c5b6d8000000000000000000000000000831615611df9576f8016302f174676283690dfe44d11d00802607f1c5b6d4000000000000000000000000000831615611e25576f800b179c82028fd0945e54e2ae18f2f002607f1c5b6d2000000000000000000000000000831615611e51576f80058baf7fee3b5d1c718b38e549cb9302607f1c5b6d1000000000000000000000000000831615611e7d576f8002c5d00fdcfcb6b6566a58c048be1f02607f1c5b6d0800000000000000000000000000831615611ea9576f800162e61bed4a48e84c2e1a463473d902607f1c5b6d0400000000000000000000000000831615611ed5576f8000b17292f702a3aa22beacca94901302607f1c5b6d0200000000000000000000000000831615611f01576f800058b92abbae02030c5fa5256f41fe02607f1c5b6d0100000000000000000000000000831615611f2d576f80002c5c8dade4d71776c0f4dbea67d602607f1c5b6c80000000000000000000000000831615611f58576f8000162e44eaf636526be456600bdbe402607f1c5b6c40000000000000000000000000831615611f83576f80000b1721fa7c188307016c1cd4e8b602607f1c5b6c20000000000000000000000000831615611fae576f8000058b90de7e4cecfc487503488bb102607f1c5b6c10000000000000000000000000831615611fd9576f800002c5c8678f36cbfce50a6de60b1402607f1c5b6c08000000000000000000000000831615612004576f80000162e431db9f80b2347b5d62e51602607f1c5b6c0400000000000000000000000083161561202f576f800000b1721872d0c7b08cf1e011415202607f1c5b6c0200000000000000000000000083161561205a576f80000058b90c1aa8a5c3736cb77e8dff02607f1c5b6c01000000000000000000000000831615612085576f8000002c5c8605a4635f2efc2362d97802607f1c5b6b8000000000000000000000008316156120af576f800000162e4300e635cf4a109e3939bd02607f1c5b6b4000000000000000000000008316156120d9576f8000000b17217ff81bef9c551590cf8302607f1c5b6b200000000000000000000000831615612103576f800000058b90bfdd4e39cd52c0cfa27c02607f1c5b6b10000000000000000000000083161561212d576f80000002c5c85fe6f72d669e0e76e41102607f1c5b6b080000000000000000000000831615612157576f8000000162e42ff18f9ad35186d0df2802607f1c5b6b040000000000000000000000831615612181576f80000000b17217f84cce71aa0dcfffe702607f1c5b6b0200000000000000000000008316156121ab576f8000000058b90bfc07a77ad56ed22aaa02607f1c5b6b0100000000000000000000008316156121d5576f800000002c5c85fdfc23cdead40da8d602607f1c5b6a80000000000000000000008316156121fe576f80000000162e42fefc25eb1571853a6602607f1c5b6a4000000000000000000000831615612227576f800000000b17217f7d97f692baacded502607f1c5b6a2000000000000000000000831615612250576f80000000058b90bfbead3b8b5dd254d702607f1c5b6a1000000000000000000000831615612279576f8000000002c5c85fdf4eedd62f084e6702607f1c5b6a08000000000000000000008316156122a2576f800000000162e42fefa58aef378bf58602607f1c5b6a04000000000000000000008316156122cb576f8000000000b17217f7d24a78a3c7ef0202607f1c5b6a02000000000000000000008316156122f4576f800000000058b90bfbe9067c93e474a602607f1c5b6a010000000000000000000083161561231d576f80000000002c5c85fdf47b8e5a72599f02607f1c5b6980000000000000000000831615612345576f8000000000162e42fefa3bdb315934a202607f1c5b694000000000000000000083161561236d576f80000000000b17217f7d1d7299b49c4602607f1c5b6920000000000000000000831615612395576f8000000000058b90bfbe8e9a8d1c4ea002607f1c5b69100000000000000000008316156123bd576f800000000002c5c85fdf4745969ea76f02607f1c5b69080000000000000000008316156123e5576f80000000000162e42fefa3a0df5373bf02607f1c5b690400000000000000000083161561240d576f800000000000b17217f7d1cff4aac1e102607f1c5b6902000000000000000000831615612435576f80000000000058b90bfbe8e7db95a2f102607f1c5b690100000000000000000083161561245d576f8000000000002c5c85fdf473e61ae1f802607f1c5b68800000000000000000831615612484576f800000000000162e42fefa39f121751c02607f1c5b684000000000000000008316156124ab576f8000000000000b17217f7d1cf815bb9602607f1c5b682000000000000000008316156124d2576f800000000000058b90bfbe8e7bec1e0d02607f1c5b681000000000000000008316156124f9576f80000000000002c5c85fdf473dee5f1702607f1c5b68080000000000000000831615612520576f8000000000000162e42fefa39ef5438f02607f1c5b68040000000000000000831615612547576f80000000000000b17217f7d1cf7a26c802607f1c5b6802000000000000000083161561256e576f8000000000000058b90bfbe8e7bcf4a402607f1c5b68010000000000000000831615612595576f800000000000002c5c85fdf473de72a202607f1c5b607f607984901c811690036fffffffffffffffffffffffffffffffff161c905091905056fe5969656c644d6174683a20496e73756666696369656e742066794461692072657365727665735969656c644d6174683a20526573756c74696e6720667944616920726573657276657320746f6f20686967685969656c644d6174683a20496e73756666696369656e74206461692072657365727665735969656c644d6174683a20526573756c74696e672064616920726573657276657320746f6f20686967685969656c644d6174683a20526f756e64696e6720696e6475636564206572726f72a2646970667358221220d5fa920c90e5ac68090308bac9d197837ac16bbf5fa9587894a2a440a3ffc5ec64736f6c63430007050033";
