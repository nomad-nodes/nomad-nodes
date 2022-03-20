import React, { useCallback, useEffect, useState } from 'react';
import "@celo-tools/use-contractkit/lib/styles.css";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { Link } from "@mui/material";

import Discord from '@/public/Discord'
import Github from '@/public/Github'
const Web3 = require('web3');
const { newKitFromWeb3 } = require('@celo/contractkit');
const { BigNumber } = require('ethers');

import {
  Alfajores,
  Mainnet,
  ContractKitProvider,
} from "@celo-tools/use-contractkit";
import { AppProps } from "next/app";
import { ButtonAppBar } from '@/components';

// you should provide this up top.
const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
const kit = newKitFromWeb3(web3);
const WALLET_ADDDRESS = '0xed0524b10643352466707d84ba8b70ab0fedb69b'
async function getBalance(kit) {
  let totalBalance = await kit.getTotalBalance(
    WALLET_ADDDRESS
  );
  return totalBalance
}

// CELO: BigNumber { s: 1, e: 19, c: Array(1) }
// cEUR: BigNumber { s: 1, e: 19, c: Array(1) }
// cREAL: BigNumber { s: 1, e: 0, c: Array(1) }
// cUSD: BigNumber { s: 1, e: 19, c: Array(1) }
// lockedCELO: BigNumber { s: 1, e: 0, c: Array(1) }
// pending:

function transformBalanceToUI(balance) {
  return Object.entries(balance).filter(([key, value]) => ['lockedCelo', 'pending'].includes(key) !== true)
}
function OwnerPage() {
  useCallback(transformBalanceToUI, [])
  const [balance, setBalance] = useState<any>([])
  useEffect(function () {
    getBalance(kit).then((currentBalance) => {
      const balance = transformBalanceToUI(currentBalance);
      setBalance(balance)
    })
  }, [transformBalanceToUI])
  useEffect(() => {
    console.log(balance)
  }, [balance])
  return (
    <>
      <Head>
        <title>Celo DApp Starter</title>
        <meta name="description" content="Celo DApp Starter" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ContractKitProvider
        dapp={{
          name: "use-contractkit demo",
          description: "A demo DApp to showcase functionality",
          url: "https://use-contractkit.vercel.app",
          icon: "https://use-contractkit.vercel.app/favicon.ico",
        }}
        network={Alfajores}
      // networks={[Mainnet, Alfajores]}
      >
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <ApolloProvider client={client}>
            <div suppressHydrationWarning>
              {/* {typeof window === "undefined" ? null : (
                <Component {...pageProps} />
              )} */}
              <ButtonAppBar />
              {balance && balance.map(([currencyName, BigN]) => {
                return <div style={{ fontSize: '3em' }}>{currencyName}: {BigN.toString().substring(0, 2)}</div>
              })}
              {/* <footer style={{ textAlign: "center" }}>
                <Link
                  href="https://github.com/celo-org/celo-progressive-dapp-starter"
                  target="_blank"
                >
                  <Github style={{width: "40px", margin: "5px"}}/>
                </Link>
                <Link
                  href="https://discord.gg/cGCE9p9352"
                  target="_blank"
                >
                  <Discord style={{width: "40px", margin: "5px"}}/>
                </Link>
              </footer> */}
            </div>
          </ApolloProvider>
        </SnackbarProvider>
      </ContractKitProvider>
    </>
  );
}

export default OwnerPage;
