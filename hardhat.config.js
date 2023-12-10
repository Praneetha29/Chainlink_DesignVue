require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.19", // Your solidity version
  networks: {
    scroll: {
      url: "https://eth-sepolia-public.unifra.io", // RPC URL of Scroll network
      accounts: "remote" // Your account's private key
    },
  },
  etherscan: {
    apiKey: "QQMHP68WN6QXET7ZNFAF7XEXTJMYX96SI2"
  }
};
