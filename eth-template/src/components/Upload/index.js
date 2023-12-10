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
import lighthouse from '@lighthouse-web3/sdk';
import { ethers } from 'ethers';
import PolygonIDVerifier from "./PolygonIDVerifier";
import { Center, Card, Image, CardBody, Container as cont } from "@chakra-ui/react";
import PolygonId from "./polygonId";
//API: 7c85bd02.2b99f4e9253346b3ab955d627c237a29

const Upload = ({marketplace, nft, account}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  // const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const [image, setImage] = useState("");
  const [Chain, setChain] = useState('');
  const [DesignType, setDesignType] = useState('');
  const [files, setfiles] = useState(null);
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(true);

  const handleChainChange = (e) => {
    setChain(e.target.value);
  };

  const handleDesignTypeChange = (e) => {
    setDesignType(e.target.value);
  };

  const handleFileChange = (e) => {
    setfiles(e.target.files[0]);
  };

  const changeToInt=(_x)=>{
    const x= ethers.utils.formatEther(_x)(10*18);
    return x;
}


  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  let imh="";
  
  const uploadFile = async(file) =>{
    const output = await lighthouse.upload(file, "7c85bd02.2b99f4e9253346b3ab955d627c237a29", false, null, progressCallback);
    console.log('File Status:', output);
    imh=output.data.Hash;
    console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }

  const handleUploadClick = async () => {
    const chain = document.getElementById("Chain").value;
    const designType = document.getElementById("DesignType").value;
    if(files){
      const output = await lighthouse.upload(files, "7c85bd02.2b99f4e9253346b3ab955d627c237a29", false, null, progressCallback);
      console.log('File Status:', output);
      imh=output.data.Hash;
      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }
    let hash=imh;
    const tx=await marketplace.addDesign(chain, designType, hash);
    await tx.wait();
    console.log("Transaction Hash: ", tx.hash);
    alert("Transaction Hash: "+tx.hash);
  };


  

  return (
    <>
     {provedAccessBirthday ? (
      <SplitContainer>
        <LeftContainer>
        <account>Account:{account}</account>
          <Form>
           
           
              <InputContainer>
              <Text htmlFor="Chain">Chain:</Text>
              <StyledInput type="number" id="Chain" value={Chain} onChange={handleChainChange} />
            </InputContainer>
            <InputContainer>
              <Text htmlFor="DesignType">Design Type:</Text>
              <StyledInput type="number" id="DesignType" value={DesignType} onChange={handleDesignTypeChange} />
              </InputContainer>
              <InputContainer>
      <Text>Upload Image:</Text>
      <StyledInput onChange={e => setfiles(e.target.files)} type="file" {...getRootProps()} />
    </InputContainer>

            <FormButton type="button" onClick={handleUploadClick} >Upload File</FormButton>
          </Form>
        </LeftContainer>
        <RightContainer>
          <UploadedImageContainer>
            {uploadedFile ? (
              <>
                <UploadedImage src={URL.createObjectURL(uploadedFile)} alt="Uploaded" />
                <UploadedImageText>Your design has been uploaded ✔️</UploadedImageText>
              </>
            ) : (
              <UploadedImageText>Upload a design to see preview</UploadedImageText>
            )}
          </UploadedImageContainer>
        </RightContainer>
      </SplitContainer>
      ):(
        <PolygonId />
      )}
    </>
  );
};

export default Upload;