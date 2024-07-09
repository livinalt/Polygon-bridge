// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");
require('dotenv').config()

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0x48a054944E79c565B9E90Bc472920abb417fDC0A"; // deployed contract address
  const MetaToken = await hre.ethers.getContractFactory("MetaToken");
  const metaToken = MetaToken.attach(contractAddress);

  const to = deployer.address;
  // Token URIs for each NFT
  const tokenURIs = [
    "https://ipfs.filebase.io/ipfs/QmaexLVDKj3aRwaoao82cwJc1TKwafTwQxvoVXXPn7xB4d",
    "https://ipfs.filebase.io/ipfs/QmdJLscq6xqDQyKtypC5MoAPUb62Gpm9mBVGAMFWYrG3eK",
    "https://ipfs.filebase.io/ipfs/QmUrg7kBJjp4iELMGQKbz7WWZWQVggqiJ1Hs8SnktT14Es",
    "https://ipfs.filebase.io/ipfs/QmS3jCvrBjHj8kKf9YoQoPuWPVvHFtKZrJsKZdbaAeAVsq",
    "https://ipfs.filebase.io/ipfs/QmQU7veMp1maKiLNg4fvDcxuwrNmpEDeRqFLkah2QTSkgx"
  ];

  const prompts = ["LOTR1", "LOTR2", "LOTR3", "LOTR4", "LOTR5"];

  const tx = await metaToken.safeMint(to, tokenURIs.length, prompts, tokenURIs);
  await tx.wait();
  console.log(`Minted ${tokenURIs.length} tokens with prompts and URIs`);

  console.log("Batch minting successful");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
