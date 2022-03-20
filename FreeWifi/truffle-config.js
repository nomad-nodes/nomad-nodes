require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3')
const ContractKit = require("@celo/contractkit")

const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)

kit.connection.addAccount('0x7ffda90238d3540a5d40c7afb76ff674bd5734b21321d45a209814e93cabbc87')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
      },
    alfajores: {
      provider: kit.connection.web3.currentProvider, // make sure web3 (above) is connected to mainnet (ie https://forno.celo.org)
        network_id: 44787,
        gas: 4000000
    },
    },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
};
