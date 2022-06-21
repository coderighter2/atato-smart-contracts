const hre = require('hardhat');
require('dotenv').config();
async function main() {
  // Insert your deployment script here
  const networkName = hre.network.name;
  const networkUrl = hre.network.config.url;
  console.log('Deploying to network', networkName, networkUrl);

  const MyCryptoLions = await hre.ethers.getContractFactory("AtatoNFT");
  const myCryptoLions = await MyCryptoLions.deploy("Atato", "Test");
  await myCryptoLions.deployed();
  console.log('deployed to', myCryptoLions.address);
}
// We recommend this pattern to be able to use
// async/await everywhere and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
