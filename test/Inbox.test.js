const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const { interface, bytecode } = require("../compile");
// updated ganache and web3 imports added for convenience

// contract test code will go here

const web3 = new Web3(ganache.provider());


let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
});

describe('Inbox', ()=>{
    it('deploys a contract', ()=>{})
})
