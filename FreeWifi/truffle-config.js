require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require('web3')

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
      },
    },
  alfajores: {
  provider: new HDWalletProvider({
    mnemonic: 'length clump advance fresh below sand walk crowd rent twist canyon truly',
    providerOrUrl: 'https://alfajores-forno.celo-testnet.org'
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
