const { expect } = require('chai');
const { ethers } = require('hardhat');

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
const Web3 = require('web3');
const { newKitFromWeb3 } = require('@celo/contractkit');
const { BigNumber } = require('ethers');

describe('mario', () => {
  it('should', async () => {
    const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
    const kit = newKitFromWeb3(web3);
    let totalBalance = await kit.getTotalBalance(
      '0xed0524b10643352466707d84ba8b70ab0fedb69b'
    );
    console.log(totalBalance.CELO.toString());
  });
});
