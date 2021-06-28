// SPDX-License-Identifier: BUSL-1.1

pragma solidity >= 0.8.0;

import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";
import "@yield-protocol/utils-v2/contracts/token/IERC2612.sol";
import "@yield-protocol/utils-v2/contracts/token/AllTransferHelper.sol";
import "@yield-protocol/utils-v2/contracts/utils/RevertMsgExtractor.sol";
import "@yield-protocol/utils-v2/contracts/interfaces/IWETH9.sol";
import "@yield-protocol/yieldspace-interfaces/IPool.sol";
import "@yield-protocol/yieldspace-interfaces/IPoolFactory.sol";
import "@yield-protocol/yieldspace-interfaces/PoolDataTypes.sol";
import "dss-interfaces/src/dss/DaiAbstract.sol";


contract PoolRouter {
    using AllTransferHelper for IERC20;
    using AllTransferHelper for address payable;

    IPoolFactory public immutable factory;
    IWETH9 public immutable weth;

    constructor(IPoolFactory factory_, IWETH9 weth_) {
        factory = factory_;
        weth = weth_;
    }

    struct PoolAddresses {
        address base;
        address fyToken;
        address pool;
    }

    /// @dev Submit a series of calls for execution
    /// The `bases` and `fyTokens` parameters define the pools that will be target for operations
    /// Each trio of `target`, `operation` and `data` define one call:
    ///  - `target` is an index in the `bases` and `fyTokens` arrays, from which contract addresses the target will be determined.
    ///  - `operation` is a numerical identifier for the call to be executed, from the enum `Operation`
    ///  - `data` is an abi-encoded group of parameters, to be consumed by the function encoded in `operation`.
    function batch(
        PoolDataTypes.Operation[] calldata operations,
        bytes[] calldata data
    ) external payable returns(bytes[] memory results) {
        require(operations.length == data.length, "Mismatched operation data");
        PoolAddresses memory cache;

        results = new bytes[](operations.length);

        for (uint256 i = 0; i < operations.length; i += 1) {
            PoolDataTypes.Operation operation = operations[i];
            
            if (operation == PoolDataTypes.Operation.ROUTE) {
                (address base, address fyToken, bytes memory poolcall) = abi.decode(data[i], (address, address, bytes));
                if (cache.base != base || cache.fyToken != fyToken) cache = PoolAddresses(base, fyToken, findPool(base, fyToken));
                results[i] = _route(cache, poolcall);

            } else if (operation == PoolDataTypes.Operation.TRANSFER_TO_POOL) {
                (address base, address fyToken, address token, uint128 wad) = abi.decode(data[i], (address, address, address, uint128));
                if (cache.base != base || cache.fyToken != fyToken) cache = PoolAddresses(base, fyToken, findPool(base, fyToken));
                results[i] = abi.encode(_transferToPool(cache, token, wad));

            } else if (operation == PoolDataTypes.Operation.FORWARD_PERMIT) {
                (address base, address fyToken, address token, address spender, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) = 
                    abi.decode(data[i], (address, address, address, address, uint256, uint256, uint8, bytes32, bytes32));
                if (cache.base != base || cache.fyToken != fyToken) cache = PoolAddresses(base, fyToken, findPool(base, fyToken));
                _forwardPermit(cache, token, spender, amount, deadline, v, r, s);
                results[i] = abi.encode(true);

            } else if (operation == PoolDataTypes.Operation.FORWARD_DAI_PERMIT) {
                        (address base, address fyToken, address spender, uint256 nonce, uint256 deadline, bool allowed, uint8 v, bytes32 r, bytes32 s) = 
                    abi.decode(data[i], (address, address, address, uint256, uint256, bool, uint8, bytes32, bytes32));
                if (cache.base != base || cache.fyToken != fyToken) cache = PoolAddresses(base, fyToken, findPool(base, fyToken));
                _forwardDaiPermit(cache, spender, nonce, deadline, allowed, v, r, s);
                results[i] = abi.encode(true);

            } else if (operation == PoolDataTypes.Operation.JOIN_ETHER) {
                (address base, address fyToken) = abi.decode(data[i], (address, address));
                if (cache.base != base || cache.fyToken != fyToken) cache = PoolAddresses(base, fyToken, findPool(base, fyToken));
                results[i] = abi.encode(_joinEther(cache.pool));

            } else if (operation == PoolDataTypes.Operation.EXIT_ETHER) {
                (address to) = abi.decode(data[i], (address));
                results[i] = abi.encode(_exitEther(to));

            } else {
                revert("Invalid operation");
            }
        }
    }

    /// @dev Return which pool contract matches the base and fyToken
    function findPool(address base, address fyToken)
        private view returns (address pool)
    {
        pool = factory.getPool(base, fyToken);
        require (pool != address(0), "Pool not found");
    }

    /// @dev Allow users to trigger a token transfer to a pool, to be used with batch
    function _transferToPool(PoolAddresses memory addresses, address token, uint128 wad)
        private
        returns (bool)
    {
        require(token == addresses.base || token == addresses.fyToken || token == addresses.pool, "Mismatched token");
        IERC20(token).safeTransferFrom(msg.sender, address(addresses.pool), wad);
        return true;
    }

    /// @dev Allow users to route calls to a pool, to be used with batch
    function _route(PoolAddresses memory addresses, bytes memory data)
        private
        returns (bytes memory result)
    {
        bool success;
        (success, result) = addresses.pool.call(data);
        if (!success) revert(RevertMsgExtractor.getRevertMsg(result));
    }

    // ---- Permit management ----

    /// @dev Execute an ERC2612 permit for the selected asset or fyToken, to be used with batch
    function _forwardPermit(PoolAddresses memory addresses, address token, address spender, uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s)
        private
    {
        require(token == addresses.base || token == addresses.fyToken || token == addresses.pool, "Mismatched token");
        IERC2612(token).permit(msg.sender, spender, amount, deadline, v, r, s);
    }

    /// @dev Execute a Dai-style permit for the selected asset or fyToken, to be used with batch
    function _forwardDaiPermit(PoolAddresses memory addresses, address spender, uint256 nonce, uint256 deadline, bool allowed, uint8 v, bytes32 r, bytes32 s)
        private
    {
        // Only the base token would ever be Dai
        DaiAbstract(addresses.base).permit(msg.sender, spender, nonce, deadline, allowed, v, r, s);
    }

    // ---- Ether management ----

    /// @dev The WETH9 contract will send ether to the PoolRouter on `weth.withdraw` using this function.
    receive() external payable {
        require (msg.sender == address(weth), "Only Weth contract allowed");
    }

    /// @dev Accept Ether, wrap it and forward it to the to a pool
    function _joinEther(address pool)
        private
        returns (uint256 ethTransferred)
    {
        ethTransferred = address(this).balance;

        weth.deposit{ value: ethTransferred }();   // TODO: Test gas savings using WETH10 `depositTo`
        IERC20(weth).safeTransfer(pool, ethTransferred);
    }

    /// @dev Unwrap Wrapped Ether held by this Router, and send the Ether
    function _exitEther(address to)
        private
        returns (uint256 ethTransferred)
    {
        ethTransferred = weth.balanceOf(address(this));

        weth.withdraw(ethTransferred);   // TODO: Test gas savings using WETH10 `withdrawTo`
        payable(to).safeTransferETH(ethTransferred);
    }
}