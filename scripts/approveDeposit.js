// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const tokenAddress = "0x48a054944E79c565B9E90Bc472920abb417fDC0A"; // Replace with your ERC721A contract address
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Replace with your FXRoot contract address
const walletAddress = "0xBeEF7C26f0804d099f49533a477809cF08c45aC2"; // Replace with your wallet address

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    const approveTx = await token.setApprovalForAll(fxERC721RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    for (let i = 0; i <= 5; i++) {
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress, i,'0x6566');
    await depositTx.wait();
    }
    console.log("Tokens deposited");  
  }

// Run the main function
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
