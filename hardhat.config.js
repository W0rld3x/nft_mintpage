require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

const API_KEY = process.env.API_KEY;
 
 module.exports = {
   solidity: {
     version :"0.8.11",
     settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
   paths:{
    artifacts: "./src/artifacts"
    },
    networks: {
      rinkeby: {
        url: ALCHEMY_API_KEY_URL,
        accounts: [RINKEBY_PRIVATE_KEY]
      }
    },
      etherscan: {
        apiKey: API_KEY
      }
 };