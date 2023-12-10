
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import NFT from "./contracts/NFT.json";
import Marketplace from "./contracts/NFTMarketplace.json";
import TokenTransferor from "./contracts/TokenTransferor.json";
import LINK from "./contracts/LINK.json";
import CCIP from "./contracts/CCIP.json";
import React, { useEffect, useState } from "react";
import VerifyPage from './pages/verify';
import ProfilePage from './pages/profile';
import Navbar from './components/Navbar';
import UploadPage from './pages/upload';
import MintPage from './pages/mint';
const {ethers} = require("ethers");

function App() {

const [account, setAccount] = useState(null);
const [marketplace, setMarketplace] = useState(null);
const [nft, setNft] = useState(null);
const [tokenTransferor, setTokenTransferor] = useState(null);
const [tokenLINK, setTokenLINK] = useState(null);
const [tokenCCIP, setTokenCCIP] = useState(null);
const [id,setId] = useState(0);

const web3Handler = async () => {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  setAccount(accounts[0]);
  //Get Provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  //Set up signer
  const signer = provider.getSigner();
  console.log("Signer: ", signer);
  loadContracts(signer);
}

const loadContracts = async (signer) => {
  const marketplace = new ethers.Contract("0xe58704Dd05d625E8E4d67c3ce28EE4F3Ad81176e", Marketplace.abi, signer);
  setMarketplace(marketplace);
  const nft = new ethers.Contract("0xDD299063F4aF2c5DDfbC109656e7F71Ce3C2176a", NFT.abi, signer);
  setNft(nft);
  const tokenTransferor = new ethers.Contract("0x759c09B5b5E02b8023e17E01990838c9fe19877E", TokenTransferor.abi, signer);
  setTokenTransferor(tokenTransferor);
  const tokenLINK = new ethers.Contract("0x326C977E6efc84E512bB9C30f76E30c160eD06FB ", LINK.abi, signer);
  setTokenLINK(tokenLINK);
  const ccip = new ethers.Contract("0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40", CCIP.abi, signer);
  setTokenCCIP(ccip);
  // setLoading(false);
}

function setIdfunc(_id){
  setId(_id);
}
  
  return (
   <Router>
      <Navbar web3Handler={web3Handler} account={account} />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/verify" element={<VerifyPage />} />
    <Route path="/profile" element={<ProfilePage marketplace={marketplace} nft={nft} account={account}/>} />
    <Route path="/upload" element={<UploadPage marketplace={marketplace} nft={nft} account={account}/>} />
    <Route path="/mint" element={<MintPage marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK}/>} />
    
  </Routes>
    </Router>
  );
}

export default App;