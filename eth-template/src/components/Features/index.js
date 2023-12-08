import React from 'react';
import Icon1 from '../../images/home1.svg';
import Icon2 from '../../images/home2.svg';
import Icon3 from '../../images/home3.svg';
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements';

const Features = () => {
  return (
    <>
    <FeaturesContainer id="features">
     <FeaturesH1>Our Features</FeaturesH1>
     <FeaturesWrapper>
     <FeaturesCard>
        <FeaturesIcon src={Icon1}/>
        <FeaturesH2>Unique Interior Designs</FeaturesH2>
        <FeaturesP>Discover unparalleled creativity with handpicked, unique interior designs crafted by our talented community.</FeaturesP>
     </FeaturesCard>
     <FeaturesCard>
        <FeaturesIcon src={Icon2}/>
        <FeaturesH2>Visualize Your Dream Home</FeaturesH2>
        <FeaturesP>Immerse yourself in your dream home by uploading a picture and witnessing realistic visualizations with our  ML model.</FeaturesP>
     </FeaturesCard>
     <FeaturesCard>
        <FeaturesIcon src={Icon3}/>
        <FeaturesH2>Own Exclusive NFTs</FeaturesH2>
        <FeaturesP>Own a piece of authenticity—each interior design is a blockchain-verified NFT, ensuring uniqueness and ownership.</FeaturesP>
     </FeaturesCard>
     </FeaturesWrapper>
    </FeaturesContainer>

    </>
  )
}

export default Features