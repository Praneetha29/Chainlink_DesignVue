import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  background: linear-gradient(to bottom, #010606, #323232);
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Icon = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ProfileContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #010606;
  height:100vh;
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

export const SplitContainer = styled.div`
  margin-top: 4rem;
  padding-top: 4rem;
  height:96vh;
  display: flex;
  background: linear-gradient(to bottom, #010606, #323232);
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
`;

export const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;
export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 1rem;
  outline: none;
  border-radius: 6px;
  transition: border-color 0.3s;
  background: transparent;
  width: 100%;
  color: #fff;

  &:focus {
    border-color: #01bf71;
  }

  &::placeholder {
    color: #bbb;
  }

  &[type="file"] {
    padding: 0.5rem;
    background-color: transparent;
    border: 2px dashed #01bf71;
    text-align: center;
    cursor: pointer;
    color: #fff;
    display: inline-block;
    width: auto; 
    min-width: 75%; 
    &:hover {
      background-color: #f4f4f4;
      color:#010606;
    }
  }

  &[type="text"] {
    border: 1px solid #ddd;
  }
`;

export const Text = styled.label`
  margin-bottom: 16px;
  color:#fff;
  font-size:1.4rem;
  margin-right:16px;
  width:30%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  border: 2px dashed #010606;
  border-radius: 10px;
  background-color: #010606;
  height:70%;
  width:100%;

  @media screen and (max-width: 768px) {
    width: auto; 
    max-width: 95%;
  }
  
`;
export const FormH1 = styled.h1`
  color: #01bf71;
  margin-bottom: 16px;
`;


export const FormButton = styled.button`
  border-radius: 10px;
  background: #01bf71;
  white-space: nowrap;
  padding: 12px 64px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  width:100%;
`;


export const UploadedImage = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

export const UploadedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:70%;
  width:100%;
  border: 1px solid #01bf71;
  border-radius: 10px;
`;
export const UploadedImageText = styled.span`
  margin-top: 16px;
  color: #fff; 
  font-size: 1.4rem;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: start;
  gap: 10px; 
  margin-bottom: 1rem; 
  color: #fff;
  font-size: 1.4rem;
  width:100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
