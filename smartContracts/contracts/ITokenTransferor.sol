// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface ITokenTransferor {
    // Event declaration
    event TokensTransferred(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address receiver,
        address token,
        uint256 tokenAmount,
        address feeToken,
        uint256 fees
    );

    // Function signatures
    function allowlistDestinationChain(uint64 _destinationChainSelector, bool allowed) external;
    function transferTokensPayLINK(
        uint64 _destinationChainSelector,
        address _receiver,
        address _token,
        uint256 _amount
    ) external returns (bytes32 messageId);
    function transferTokensPayNative(
        uint64 _destinationChainSelector,
        address _receiver,
        address _token,
        uint256 _amount
    ) external returns (bytes32 messageId);
    function withdraw(address _beneficiary) external;
    function withdrawToken(address _beneficiary, address _token) external;
    function transferCCIP(address to, uint256 value)external ;

}
