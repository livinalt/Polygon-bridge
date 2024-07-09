## NFT Bridge Using fxPortal

This project demonstrates how to use the fxPortal contracts to transfer NFT (ERC721 tokens) from the Sepolia test network to the Amoy test network.This setup enhances the interoperability and utility of your tokens, making them usable across multiple blockchain ecosystems. By following the steps outlined in this guide, you can deploy, mint, approve, deposit, and check the balance of your tokens across different blockchain networks. 

### Prerequisites

- Node.js and npm installed
- Hardhat installed globally (`npm install --global hardhat`)
- An Ethereum wallet with some Sepolia ETH for gas fees
- A Polygon wallet with some Amoy MATIC for gas fees
- `.env` file with your private key and public key

### Project Setup

1. **Clone the repository**:
  
2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure environment variables**:
    - Create a `.env` file in the root directory by copying the `.env.example` file:
      ```sh
      cp .env.example .env
      ```
    - Update the `.env` file with your private key and public key:
      ```
      PRIVATE_KEY=<your_private_key>
      PUBLIC_KEY=<your_public_key>
      ```

### Steps for Bridging

#### 1. Deploy ERC721A Contract on Sepolia

Deploy the ERC721A contract on the Sepolia test network:

```sh
npx hardhat run scripts/deploy.js --network Sepolia
```

After deployment, note the contract address and update the `tokenAddress` variable in the other scripts with this new contract address.

#### 2. Mint Tokens to Your Wallet

Mint tokens to your wallet on the Sepolia test network:

```sh
npx hardhat run scripts/mint.js --network Sepolia
```

#### 3. Approve and Deposit Tokens to Polygon

Approve and deposit your tokens to Polygon using fxPortal:

```sh
npx hardhat run scripts/approveDeposit.js --network Sepolia
```

Wait for about 20-30 minutes for the tokens to show up in your Polygon account.

#### 4. Verify Tokens on Polygon

Check your Polygon account for the tokens using [Polygonscan](https://polygonscan.com/). Once the tokens arrive, note the transaction details to get the contract address on Polygon.

Update the `tokenAddress` variable in the `getBalance.js` script with this Polygon contract address.

#### 5. Check Balance on Polygon

Check the balance of your tokens on the Mumbai test network:

```sh
npx hardhat run scripts/getBalance.js --network mumbai
```

### Scripts Overview

- **deploy.js**: Deploys the ERC721A contract on the specified network.
- **mint.js**: Mints tokens to the specified wallet address.
- **approveDeposit.js**: Approves the tokens and deposits them to Polygon using fxPortal.
- **getBalance.js**: Checks the token balance on the specified network.

### Example Usage

Here is an example sequence of commands you might run to deploy, mint, approve, deposit, and check the balance of your tokens:

```sh
# Install dependencies
npm install

# Deploy ERC721A contract on Sepolia
npx hardhat run scripts/deploy.js --network Sepolia

# Mint tokens on Sepolia
npx hardhat run scripts/mint.js --network Sepolia

# Approve and deposit tokens to Polygon
npx hardhat run scripts/approveDeposit.js --network Sepolia

# Wait for tokens to arrive on Polygon (20-30 minutes)

# Check token balance on Mumbai
npx hardhat run scripts/getBalance.js --network mumbai
```
## Author
Jeremiah Samuel - livinalt@gmail.com

## License
This project is licensed under the MIT License.

