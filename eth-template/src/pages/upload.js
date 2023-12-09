import React from 'react'
import Upload from '../components/Upload'

const UploadPage = ({marketplace,nft,account}) => {
  return (
    <Upload marketplace={marketplace} nft={nft} account={account}/>
  )
}

export default UploadPage;