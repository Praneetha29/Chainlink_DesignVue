const hre = require("hardhat");

async function main() {
  const NFT=await hre.ethers.getContractFactory("NFT"); 
  const nft=await NFT.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  const Market=await hre.ethers.getContractFactory("Market");
  const market=await Market.deploy(nft.address);
  await market.deployed();
  console.log("Market deployed to:", market.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});