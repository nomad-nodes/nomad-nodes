require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: "8545" // Match any network id
    },
  },
  alfajores: {
  provider: new HDWalletProvider({
    privateKeys: [process.env.PRIVATE_KEY],
    providerOrUrl: `https://alfajores-forno.celo-testnet.org`
  }),
  network_id: 44787
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
}
