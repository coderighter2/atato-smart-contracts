/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config()
 require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      chainId: 4,
      accounts: [process.env.RINKEBY_DEPLOYER_PRIVATE_KEY]
    },
  }
};
