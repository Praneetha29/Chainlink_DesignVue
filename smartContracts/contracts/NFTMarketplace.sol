// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./ITokenTransferor.sol";
import "./IPUSHCommInterface.sol";


contract NFTMarketplace{
    // address payable public feeAccount;
    uint256 public itemCount;
    IERC20 token;
    ITokenTransferor public feeAccount;
    IPUSHCommInterface public notificationPolygon;
    IPUSHCommInterface public notificationSepoila;
    uint256 public unit=10**18;

    constructor(){
        feeAccount = ITokenTransferor((0x759c09B5b5E02b8023e17E01990838c9fe19877E));
        token=IERC20(0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40);
        notificationPolygon = IPUSHCommInterface(0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa);
        notificationSepoila = IPUSHCommInterface(0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7);
    }

    enum NFTType { Flat, Building, Palace, Interior }

    struct Item {
        uint256 id;
        string description;
        IERC721 nft;
        uint256 nftType;
        uint256 price;
        address payable owner;
    }

    struct Details {
        uint256 itemId;
        uint256 price;
        string description;
        address owner;
    }

    struct trainDetails{
        address creator;
        string hash;
        uint chain;
    }

    mapping(uint256 => Item) public items;
    mapping(uint256 => Details) public itemDetails;
    mapping(address => string[]) public Designs;
    mapping(address => uint256)public CreatorCompensation;
    mapping(uint256=> trainDetails[])public DesignByType;
    mapping(uint256=> uint256)public noOfDesignsPerType;
    mapping(uint256=> uint256)public pricePerType;
    mapping(address=> uint256)public PolygonChainPrice;
    mapping(address=> uint256)public SepoilaChainPrice;

    function addDesign(uint256 chain,uint256 _designtype,string memory _hash)public{
        Designs[msg.sender].push(_hash);
        DesignByType[_designtype].push(trainDetails(
            msg.sender,
            _hash,
            chain
        ));
        noOfDesignsPerType[_designtype]++;
    }

    function makeItem(IERC721 _nft,string memory description, uint256 tokenId, uint256 price, uint256 _type)public{
        require(price>0, "Price must be greater than zero" );
        itemCount++;
        _nft.transferFrom(msg.sender,address(this),tokenId);
        items[itemCount] = Item(
            itemCount,
            description,
            _nft,
            _type,
            price,
            payable(msg.sender)
        );
        itemDetails[itemCount] = Details(
            itemCount,
            price,
            description,
            msg.sender
        );
        pricePerType[_type]+=price;
    }

    function autopayCreators() public {
 
        for (uint256 typeIndex = 0; typeIndex < 4; typeIndex++) {
            uint256 numberOfDesigns = noOfDesignsPerType[typeIndex];
            if(numberOfDesigns!=0){
                uint256 paymentPerDesign = pricePerType[typeIndex] / numberOfDesigns;
                // pricePerType[typeIndex]=0;

                // Iterate through each design in the type
                for (uint256 designIndex = 0; designIndex < numberOfDesigns; designIndex++) {
                    trainDetails memory design = DesignByType[typeIndex][designIndex];
                    // Allocate payment based on the chain
                    if (design.chain == 1) { // Polygon Mumbai
                        PolygonChainPrice[design.creator]+=paymentPerDesign;
                        IPUSHCommInterface(0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa).sendNotification(
                            0x32985bBc9461E9f3913f216E6E4DC069d0a7fa80, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
                            design.creator, // to recipient, put address(this) in case you want Broadcast or Subset. For targeted put the address to which you want to send
                            bytes(
                                string(
                                    // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                                    abi.encodePacked(
                                        "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                                        "+", // segregator
                                        "3", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                                        "+", // segregator
                                        "You have recieved", // this is notification title
                                        "+", // segregator
                                        "0.01 CCIP" // notification body
                                    )
                                )
                            )
                        );
                    } else if (design.chain == 2) { // Sepolia Testnet
                        SepoilaChainPrice[design.creator]+=paymentPerDesign;
                        IPUSHCommInterface(0x0C34d54a09CFe75BCcd878A469206Ae77E0fe6e7).sendNotification(
                            0x32985bBc9461E9f3913f216E6E4DC069d0a7fa80, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
                            design.creator, // to recipient, put address(this) in case you want Broadcast or Subset. For targeted put the address to which you want to send
                            bytes(
                                string(
                                    // We are passing identity here: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                                    abi.encodePacked(
                                        "0", // this represents minimal identity, learn more: https://push.org/docs/notifications/notification-standards/notification-standards-advance/#notification-identity
                                        "+", // segregator
                                        "3", // define notification type:  https://push.org/docs/notifications/build/types-of-notification (1, 3 or 4) = (Broadcast, targeted or subset)
                                        "+", // segregator
                                        "You have recieved", // this is notification title
                                        "+", // segregator
                                        "0.01 CCIP" // notification body
                                    )
                                )
                            )
                        );
                    }
                }
            }
        }
    }

    function sendSepoila()public {
        feeAccount.transferTokensPayLINK(16015286601757825753,0x4277D52b86DD03aB394754868d8c7B414AcFfc88,0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40,1000000000000000);
    }

    function sendMumbai(address to,uint256 value)public {
       feeAccount.transferCCIP(to, value);
    }

    function getItemDetail(uint256 itemId)public view returns(Details memory){
        return itemDetails[itemId];
    }

    function getCreatorCompPolygon(address creator)public view returns(uint256){
        return PolygonChainPrice[creator];
    }

    function getCreatorCompSepoila(address creator)public view returns(uint256){
        return SepoilaChainPrice[creator];
    }

    function receiveCreatorCompPolygon(address)public{ 
        PolygonChainPrice[msg.sender]=0;
    }

    function receiveCreatorCompSepoila(address)public{ 
        SepoilaChainPrice[msg.sender]=0;
    }

    function getDesigns(address creator)public view returns(string[] memory){
        return Designs[creator];
    }


}