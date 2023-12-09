import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  LeftContainer,
  RightContainer,
  SplitContainer,
  Form,
  FormH1,
  Text,
  FormButton,
  UploadedImage,
  UploadedImageContainer,
  UploadedImageText,
  StyledInput,
  InputContainer,
  Container,
  Icon,
  UserContainer,
  UserIcon,
  WalletAddress,
  AdditionalInfo

} from './UploadElements';
import Navbar from '../Navbar';
Upload = () => {
 

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

 
  

  return (
    <>
      <SplitContainer>
        <LeftContainer>
        <account>Account:</account>
          <Form>
           
           
              <InputContainer>
              <Text >Chain:</Text>
              <StyledInput type="number" id="Chain"  />
            </InputContainer>
            <InputContainer>
              <Text htmlFor="DesignType">Design Type:</Text>
              <StyledInput type="number" id="DesignType" />
              </InputContainer>
              <InputContainer>
      <Text>Upload Image:</Text>
      <StyledInput  />
    </InputContainer>

            <FormButton type="button"  >Upload File</FormButton>
          </Form>
        </LeftContainer>
        <RightContainer>
          <UploadedImageContainer>
            {uploadedFile ? (
              <>
                <UploadedImage alt="Uploaded" />
                <UploadedImageText>Your design has been uploaded ✔️</UploadedImageText>
              </>
            ) : (
              <UploadedImageText>Upload a design to see preview</UploadedImageText>
            )}
          </UploadedImageContainer>
        </RightContainer>
      </SplitContainer>
    </>
  );
};

export default Upload;