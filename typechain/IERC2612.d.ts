/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IERC2612Interface extends ethers.utils.Interface {
  functions: {
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;

  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;

  events: {};
}

export class IERC2612 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: IERC2612Interface;

  functions: {
    nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "nonces(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  permit(
    owner: string,
    spender: string,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
    owner: string,
    spender: string,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    nonces(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonces(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)"(
      owner: string,
      spender: string,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
