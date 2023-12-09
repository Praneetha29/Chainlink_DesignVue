import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50%)); } 
`;

export const SponsorsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: linear-gradient(to bottom, #010606, #323232);
`;

export const SponsorScrollContainer = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 30s linear infinite;
`;

export const SponsorItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px; 
  flex-shrink: 0; 
`;

export const SponsorLogo = styled.img`
  width: 150px; 
  height: auto;
  margin-right: 10px;
  border-radius: 50px; 
`;

export const SponsorName = styled.div`
  text-align: center;
  font-size: 2.2rem;
  color: #fff;
`;