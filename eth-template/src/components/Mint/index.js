import React, { useCallback, useState } from 'react';
import lighthouse from '@lighthouse-web3/sdk';
import { ethers } from 'ethers';

import { SplitContainer, LeftContainer, RightContainer, Form, FormButton, FormH1, Text, Button, UploadContainer, Options, StyledInput } from './MintElements';
const Mint = ({ marketplace, nft, account, tokenTransferor, tokenCCIP, tokenLINK }) => {
    const [query, setQuery] = useState('');
    const [generatedImage, setGeneratedImage] = useState(''); // For the generated image URL
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [files, setfiles] = useState(null);

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setTimeout(() => {
    //         setImageSrc('https://via.placeholder.com/150');
    //         setLoading(false);
    //     }, 2000);
    // };

    const handleSearch = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
          const response = await fetch('http://localhost:8080/generate-image', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ description: query }), // Send the user input as JSON
          });

          const data = await response.json();
          console.log("Response Data:", data);

          const urlMatch = data.imageUrl.match(/\['(https?.+?)'/);
        if (urlMatch && urlMatch.length > 1) {
            const imageUrl = urlMatch[1];
            setGeneratedImage(imageUrl);
            console.log("Generated Image URL set to:", imageUrl);
        } else {
            console.error("No valid image URL found in the response");
        }
        
        
        
      } catch (error) {
          console.error("Error fetching generated image:", error);
      }
      setLoading(false);
  };

    const toWei = (n) => {
        return ethers.utils.parseEther(n.toString());
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'DownloadedImage.png'; // Set the download filename here
        document.body.appendChild(link); // Append to the body
        link.click(); // Simulate click to trigger download
        document.body.removeChild(link); // Remove the link after triggering download
    };

    const [formValues, setFormValues] = useState({
        description: '',
        type: '', // Will store the number corresponding to the selected type
        image: null,
    });

    const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormValues({ ...formValues, image: e.target.files[0] });
    };

    const progressCallback = (progressData) => {
        let percentageDone =
            100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
        console.log(percentageDone);
    };
    let imh = "";
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Log the specific values: Description, Type, and File


      const description = formValues.description;
      const type = formValues.type;

      console.log(description);
      //You can handle additional form submission logic here
      if (files) {
          const output = await lighthouse.upload(files, "7c85bd02.2b99f4e9253346b3ab955d627c237a29", false, null, progressCallback);
          console.log('File Status:', output);
          imh = output.data.Hash;
          console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
      }
      let hash = imh;
      console.log(description, type, hash);

      const metaData = JSON.stringify({ description, type, hash });
      const response = await lighthouse.uploadText(metaData, "7c85bd02.2b99f4e9253346b3ab955d627c237a29");
      console.log(response);

      const uri = "https://gateway.lighthouse.storage/ipfs/" + response.data.Hash;
      console.log(uri);
      console.log(account);
      console.log(marketplace);
      console.log(imh);
      // console.log(uri.hash);


      console.log(tokenCCIP);

      const approveCCIP = await tokenCCIP.approve(nft.address, toWei(0.03));
      await approveCCIP.wait();
      // const approveLINK = await tokenLINK.approve(nft.address, toWei(0.03));
      // await approveLINK.wait();

      const mint = await nft.mint(uri, toWei(0.03));
      await mint.wait();
      const id = await nft.tokenCount();
      await (await nft.setApprovalForAll(marketplace.address, true)).wait();
      await (await marketplace.makeItem(nft.address, imh, id, toWei(0.03), type)).wait();
      console.log(4);
      alert("NFT created and Design approved");
    };





    return (
        <>
        <SplitContainer>
          <LeftContainer>
            <Form onSubmit={handleSearch}>
              <Text>account: {account}</Text>
              <StyledInput
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a query..."
              />
              <Button onClick={handleSearch}>Search</Button>
  
              {loading && <div>Loading...</div>}
  
              {imageSrc && !loading && (
                <Text>
                  <img
                    src={imageSrc}
                    alt="Loaded"
                    onClick={downloadImage}
                    style={{ cursor: 'pointer', marginTop: '10px'}}
                  />
                </Text>
              )}

              {generatedImage && (
    <img src={generatedImage} alt="Generated"  style={{ maxWidth: '40%', height: 'auto' }} />
)}

              
            </Form>
          </LeftContainer>
          <RightContainer>
            <UploadContainer>

            <Text>Description:</Text>
              <StyledInput
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
              />
              <Options>
                <Text>Type:</Text>
                <select name="type" value={formValues.type} onChange={handleInputChange}>
                  <option value="">Select a type</option>
                  <option value="1">Houses</option>
                  <option value="2">Buildings</option>
                  <option value="3">Flat</option>
                  <option value="4">Interior Designs</option>
                </select>
              </Options>
  
              <div>
                <Text>Upload Image:</Text>
                <StyledInput onChange={e => setfiles(e.target.files)} type="file" />
              </div>
              <FormButton type="submit" onClick={handleSubmit}>Submit</FormButton>
            </UploadContainer>
          </RightContainer>
        </SplitContainer>
      </>
    )
}

export default Mint