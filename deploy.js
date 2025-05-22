const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
const { SEPOLIA_RPC_URL } = require("./env.js");
//updated web3 and hdwallet-provider imports added for convenience

const provider = new HDWalletProvider(
  "version bottom cushion left hair arch nerve horse scrap zebra choice lesson",
  SEPOLIA_RPC_URL
);

// deploy code will go here
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);

  provider.engine.stop();
};

deploy();
