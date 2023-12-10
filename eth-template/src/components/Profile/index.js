import React, { useEffect } from 'react';
import {
  ProfileContainer,
  NFTsWrapper,
  NFTImage,
  NFTName,
  SectionHeading,
  Card,
  StyledBtn
} from './ProfileElements';

import image1 from '../../images/svg-1.svg';
import image2 from '../../images/svg-1.svg';
import image3 from '../../images/svg-1.svg';
import image4 from '../../images/svg-1.svg';
import image5 from '../../images/svg-1.svg';
import image6 from '../../images/svg-1.svg';
import image7 from '../../images/svg-1.svg';
import image8 from '../../images/svg-1.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { ethers } from 'ethers';

const Profile = ({marketplace, nft, account, tokenTransferor, tokenCCIP, tokenLINK}) => {
  const nftData = [
    { name: 'NFT 1', image: image1 },
    { name: 'NFT 2', image: image2 },
    { name: 'NFT 3', image: image3 },
    { name: 'NFT 4', image: image4 },
    { name: 'NFT 5', image: image5 },
    { name: 'NFT 6', image: image6 },
    { name: 'NFT 7', image: image7 },
    { name: 'NFT 8', image: image8 }
  ];

  const [myDesigns, setMyDesigns] = useState([])
  const [polygon, setPolygon] = useState(0);
  const [sepoila, setSepoila] = useState(0);
  const [myNFTs, setMyNFTs] = useState([]); //setup
  const [listedItems, setListedItems] = useState([""])

  const loadMyDesigns = async () => {
    const myDesigns = await marketplace.getDesigns(account);
    setMyDesigns(myDesigns);
    console.log("My Designs: ", myDesigns);
  }
  const loadNFTs = async () => {
    const itemCount = await marketplace.itemCount()
    let listedItems = []
    for (let indx = 1; indx <= itemCount; indx++) {
      const i = await marketplace.items(indx)
      // console.log("Item: ", i.owner);
      if ((i.owner.toLowerCase()) === account){
        console.log("Desc: ", i.description);
        listedItems.push(i.description);
      }
    }
    setListedItems(listedItems);
    console.log("Listed Items: ", listedItems);
  }
  const changeToInt = (_x) => {
    const x = ethers.utils.formatEther(_x);
    return x;
  };

  useEffect(() => {
    if (account) {
      loadMyDesigns();
      loadNFTs();
    }
  },[account]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const handleAutoPay = async () => {
    try {
        const tx = await marketplace.autopayCreators();
        await tx.wait();
    } catch (error) {
        console.error('Error:', error);
    }
  }
useEffect(() => {
  const getPolygon = async () => {
    const polygon = await marketplace.getCreatorCompPolygon(account);
    const sepoila = await marketplace.getCreatorCompSepoila(account);
    setPolygon(ethers.utils.formatEther(polygon));
    setSepoila(ethers.utils.formatEther(sepoila));
  };
  if(account){
    getPolygon();
  }
}, [account]);

const getPaidPolygon=async()=>{
  try {
    console.log((polygon*(10**18)).toString());
    console.log("Hello");
    const tx = await marketplace.receiveCreatorCompPolygon(account);
      await tx.wait();
    const approveCCIP = await tokenCCIP.approve(tokenTransferor.address, (polygon*(10**18)).toString());
      await approveCCIP.wait();
    const tx1 = await tokenTransferor.transferCCIP(account, (polygon*(10**18)).toString());
      await tx1.wait();
    console.log("Transaction Hash: ", tx.hash);
    alert("Payment recieved \n Transaction Hash: "+tx.hash);
  } catch (error) {
      console.error('Error:', error);
  }
}

const getPaidSepoila=async()=>{
  try{
    console.log((sepoila*(10**18)).toString());
    console.log("Hello");
    const tx0 = await marketplace.receiveCreatorCompSepoila(account);
      await tx0.wait();
    const tx=await tokenTransferor.allowlistDestinationChain("16015286601757825753","true");
      await tx.wait();
    const tx1 = await tokenTransferor.transferTokensPayLINK("16015286601757825753",account,tokenCCIP.address,(sepoila*(10**18)).toString());
      await tx1.wait();
    console.log("Transaction Hash: ", tx1.hash);
  }catch(error){
    console.error('Error:', error);
  }
}

  return (
    <>
      <ProfileContainer>
        <SectionHeading>Uploaded Designs</SectionHeading>
        <NFTsWrapper {...settings}>
          {myDesigns.map((nft) => (
            <Card>
              <NFTImage src={`https://gateway.lighthouse.storage/ipfs/${nft}`} />
              <NFTName>{nft.name}</NFTName>
            </Card>
          ))}
        </NFTsWrapper>
        <SectionHeading>Your NFTs</SectionHeading>
        <NFTsWrapper {...settings}>
          {listedItems.map((nft) => (
            <Card>
              <NFTImage src={`https://gateway.lighthouse.storage/ipfs/${nft}`} />
              <NFTName>{nft.name}</NFTName>
            </Card>
          ))}
        </NFTsWrapper>
        <br></br>
        <div>
        <SectionHeading>Account:{account}</SectionHeading>
        {/* <button onClick={handleAutoPay}>AutoPay</button> */}
        <SectionHeading>Polygon Compensation: {polygon}</SectionHeading>
        <StyledBtn onClick={getPaidPolygon}>Get Polygon Compensation</StyledBtn>
        <SectionHeading>Sepoila Compensation: {sepoila}</SectionHeading>
        <StyledBtn onClick={getPaidSepoila}>Get Sepoila Compensation</StyledBtn>
        </div>
      </ProfileContainer>
    </>
  );
};

export default Profile;