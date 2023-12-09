// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFT is ERC721URIStorage {
    uint public tokenCount;
    IERC20 tokenCCIP;
    IERC20 tokenLINK;
    uint256 public units = 10**18;
    address public owner;
    constructor() ERC721("Real Estate NFT","RENFT") {
        tokenCCIP=IERC20(0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40);
        tokenLINK=IERC20(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        owner=0x759c09B5b5E02b8023e17E01990838c9fe19877E;
    }

    function mint(string memory _tokenURI,uint256 price) external returns(uint){
        //->Approve from tokenLink by calling approve() keeping _spender as contract address and amount as price
        bool x=tokenCCIP.transferFrom(msg.sender,owner,price);//https://mumbai.polygonscan.com/token/0xf1e3a5842eeef51f2967b3f05d45dd4f4205ff40#readContract
        bool y=tokenLINK.transferFrom(msg.sender,owner,1000000000000000000);//https://mumbai.polygonscan.com/address/0x326C977E6efc84E512bB9C30f76E30c160eD06FB#code
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return tokenCount;
    }
}