require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: {
      url: 'https://polygon-amoy.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz',
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  
};