const hre = require("hardhat");

async function main() {
  const TokenTransferor=await hre.ethers.getContractFactory("TokenTransferor");
    const tokenTransferor=await TokenTransferor.deploy(
        "0x70499c328e1e2a3c41108bd3730f6670a44595d1",
        "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
        );
    await tokenTransferor.deployed();
    console.log("TokenTransferor deployed to:", tokenTransferor.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});