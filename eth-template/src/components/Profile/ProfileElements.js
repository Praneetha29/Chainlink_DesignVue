import styled from 'styled-components';
import Slider from 'react-slick';


export const ProfileContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #010606;
  height:96vh;
  margin-top: 4rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #01bf71;
  border-radius: 50%;
  margin-right: 10px;
`;

export const WalletAddress = styled.div`
  color: #01bf71;
  font-weight: 600;
`;

export const AdditionalInfo = styled.div`
  color: #01bf71;
  margin-top: 4px;
`;

export const NFTsWrapper = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    padding: 0 15px; // Space between the slides
  }

  .slick-arrow {
    z-index: 1;
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    display: block !important;
    background: transparent;
    color: black;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    line-height: 1;
    color: black;
    opacity: 1;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 250px; // Keep each card's width consistent
  text-align: center;
  margin: 10px;
`;

export const NFTImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const NFTName = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-top: 8px;
`;

export const SectionHeading = styled.h3`
  font-size: 24px;
  color: #01bf71;
  margin-bottom: 30px;
  margin-top:30px;
  
`;

export const StyledBtn = styled.button`
border-radius: 50px;
 white-space: nowrap;
 padding: 10px 22px;
 color: #01bf71;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transistion: all 0.2s ease-in-out;
 text-decoration: none;
 border: 3px solid #01bf71;
 background: transparent;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
 }
`