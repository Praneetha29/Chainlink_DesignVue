import React, { useState, useEffect } from 'react';
import lighthouse from '@lighthouse-web3/sdk';
import { ethers } from 'ethers';

const CreateDesign = ({ marketplace, nft, account, tokenTransferor, tokenCCIP, tokenLINK }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [files, setfiles] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setImageSrc('https://via.placeholder.com/150');
      setLoading(false);
    }, 2000);
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
    // You can handle additional form submission logic here
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


    console.log(tokenCCIP);

    const approveCCIP = await tokenCCIP.approve(nft.address, toWei(0.03));
    await approveCCIP.wait();
    // const approveLINK = await tokenLINK.approve(nft.address, toWei(0.03));
    // await approveLINK.wait();

    const mint = await nft.mint(uri, toWei(0.03));
    await mint.wait();
    const id = await nft.tokenCount();
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    await (await marketplace.makeItem(nft.address, description, id, toWei(0.03), type)).wait();
    console.log(4);
    alert("NFT created and Design approved");
  };


  return (
    <div>
      account: {account}
      <br></br>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a query..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}

      {imageSrc && !loading && (
        <div>
          <img
            src={imageSrc}
            alt="Loaded"
            onClick={downloadImage}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}

      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Type:</label>
          <select name="type" value={formValues.type} onChange={handleInputChange}>
            <option value="">Select a type</option>
            <option value="1">Houses</option>
            <option value="2">Buildings</option>
            <option value="3">Flat</option>
            <option value="4">Interior Designs</option>
          </select>
        </div>

        <div>
          <label>Upload Image:</label>
          <input onChange={e => setfiles(e.target.files)} type="file" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateDesign;
