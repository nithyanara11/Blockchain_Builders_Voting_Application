# Blockchain Decentralized Voting Application

## Installation

```shell
npm install
```

Setup Metamask wallet in chrome browser. Use the API_URL mentioned below to setup an account. 
Add a network in MetaMask with volta network and currency symbol as VT

Use below link to load the VT wallet
```shell
https://voltafaucet.energyweb.org/
```

Create a .env file and paste the below content.
```shell
API_URL = "https://volta-rpc.energyweb.org/"
PRIVATE_KEY = "" (paste the private key of metamask account)
CONTRACT_ADDRESS = "" (paste the contract address generated after deployment)
```


You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file and in constant.js file.
Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```