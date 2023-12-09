import React from 'react'
import Profile from '../components/Profile'
import NFT from "../contracts/NFT.json";
import Marketplace from "../contracts/NFTMarketplace.json";
import TokenTransferor from "../contracts/TokenTransferor.json";
import LINK from "../contracts/LINK.json";
import CCIP from "../contracts/CCIP.json";

const ProfilePage = ({marketplace,nft,account,tokenTransferor,tokenCCIP,tokenLINK}) => {
  return (
    <>
      <Profile marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK} />
    </>
  )
}

export default ProfilePage
