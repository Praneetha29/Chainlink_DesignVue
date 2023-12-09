import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data';
import Features from '../components/Features'
import Profile from "../components/Profile";
import Upload from "../components/Upload/index";
import CreateDesign from "../components/CreateDesign";
import Sponsors from "../components/Sponsors/Sponsors";
import NFT from "../contracts/NFT.json";
import Marketplace from "../contracts/NFTMarketplace.json";
import TokenTransferor from "../contracts/TokenTransferor.json";
import LINK from "../contracts/LINK.json";
import CCIP from "../contracts/CCIP.json";



const {ethers} = require("ethers");


const 
Home = () => {
const[isOpen, setIsOpen]= useState(false)
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
  const marketplace = new ethers.Contract("0x1efE1B83A402B8D10Fd3e04EA3140f9ce569fd21", Marketplace.abi, signer);
  setMarketplace(marketplace);
  const nft = new ethers.Contract("0xB1b53A92E878040B769dcdFbFCC2957550F89879", NFT.abi, signer);
  setNft(nft);
  const tokenTransferor = new ethers.Contract("0xCfBA60B6597B02Befe53F667EBe23B140C1f64Fe", TokenTransferor.abi, signer);
  setTokenTransferor(tokenTransferor);
  const tokenLINK = new ethers.Contract("0x326C977E6efc84E512bB9C30f76E30c160eD06FB ", LINK.abi, signer);
  setTokenLINK(tokenLINK);
  const tokenCCIP = new ethers.Contract("0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40", CCIP.abi, signer);
  setTokenCCIP(tokenCCIP);
  // setLoading(false);
  // let x;
}

function setIdfunc(_id){
  setId(_id);
}


const toggle = () => {
    setIsOpen(!isOpen)
}


  return (
   <>
   <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
   <Navbar web3Handler={web3Handler} account={account} showNavMenu={true} />
   <HeroSection />
   <InfoSection {...homeObjOne}/>
   <Features />
   <Profile marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK}/>
   <Upload marketplace={marketplace} nft={nft} account={account}/>
   <CreateDesign marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK}/>
   
   </>
  )
}

export default 
Home