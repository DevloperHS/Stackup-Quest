/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

const INFURA_URL = "Enter Your API KEY";
const PRIVATE_KEY =
  "WALLET PRIVATE KEY";

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
