import React, {useState} from 'react'
import Mint from '../components/Mint';
import NFT from "../contracts/NFT.json";
import Marketplace from "../contracts/NFTMarketplace.json";
import TokenTransferor from "../contracts/TokenTransferor.json";
import LINK from "../contracts/LINK.json";
import CCIP from "../contracts/CCIP.json";

const MintPage = ({marketplace,nft,account,tokenTransferor,tokenCCIP,tokenLINK}) => {
  return (
    <Mint marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK} />
  )
}

export default MintPage