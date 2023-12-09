import styled from 'styled-components';
import {Link} from 'react-router-dom';

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


export const FormH1 = styled.h1`
  color: #01bf71;
  margin-bottom: 16px;
`;

export const Text = styled.span`
  margin-bottom: 16px;
  color:#fff;
  font-size:1.4rem;
  margin-right:16px;
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


export const LeftContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  
`;

export const RightContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  height:90%;
  margin: 0 auto;
  padding: 50px;
  border: none;
  gap:18px;
  border-radius: 10px;
  background-color: #010606;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: #fff;
`;

export const Button = styled.button`
  border-radius: 10px;
  border: 2px solid #01bf71;
  background-color: transparent;
  white-space: nowrap;
  padding: 12px 48px;
  color: #01bf71;
  font-weight: 600;
  margin: 10px 0;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #01bf71;
    color: #fff;
  }
`;

export const UploadContainer = styled.div`
  padding: 20px;
  padding-top:40px;
  border: 1px solid #01bf71;
  border-radius: 10px;
  width: 100%;
  margin: 0 auto;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px; 
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
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
