import React, { useEffect } from 'react';
import {
  ProfileContainer,
  NFTsWrapper,
  NFTImage,
  NFTName,
  SectionHeading,
  Card,
  Container,
  Icon,
  UserContainer,
  UserIcon,
  WalletAddress,
  AdditionalInfo
} from './ProfileElements';

import Navbar from '../Navbar';

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

const Profile = () => {
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

  return (
    <>

      <Container>
        <Icon to="/">DesignVue</Icon>
        <UserContainer>
          <UserIcon />
          <div>
            <WalletAddress>account:</WalletAddress>
            <AdditionalInfo>Additional Information</AdditionalInfo>
          </div>
        </UserContainer>
      </Container>
      
      <ProfileContainer>
        <SectionHeading>Uploaded Designs</SectionHeading>
        <NFTsWrapper {...settings}>
          {myDesigns.map((nft) => (
            <Card>
              <NFTImage  />
              <NFTName>{nft.name}</NFTName>
            </Card>
          ))}
        </NFTsWrapper>
        <SectionHeading>Your NFTs</SectionHeading>
        <NFTsWrapper {...settings}>
          {nftData.map((nft, index) => (
            <Card key={index}>
              <NFTImage src={nft.image} alt={nft.name} />
              <NFTName>{nft.name}</NFTName>
            </Card>
          ))}
        </NFTsWrapper>
      </ProfileContainer>
    </>
  );
};

export default Profile;