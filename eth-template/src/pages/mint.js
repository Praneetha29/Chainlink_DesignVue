import React, {useState} from 'react'
import Mint from '../components/Mint';

const MintPage = ({marketplace,nft,account,tokenTransferor,tokenCCIP,tokenLINK}) => {
  return (
    <Mint marketplace={marketplace} nft={nft} account={account} tokenTransferor={tokenTransferor} tokenCCIP={tokenCCIP} tokenLINK={tokenLINK} />
  )
}

export default MintPage