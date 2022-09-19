const { ethers } = require("hardhat");
const hre = require("hardhat");
const { etherscan } = require("../hardhat.config");

async function main() {

  const getContract = await ethers.getContractFactory("WattEther");
  const contractDeploy = await getContract.deploy("https://gateway.pinata.cloud/ipfs/Qmb1RBPnFoHBskptEZXNHTemY5NjGgAPAKuU5mbeGTePPK/landMeta.json")

  await contractDeploy.deployed(); 

  console.log("Contract deployed to : ", contractDeploy.address);

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });