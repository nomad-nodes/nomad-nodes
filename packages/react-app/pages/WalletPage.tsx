import { ApolloProvider } from "@apollo/client"
import { ContractKitProvider } from "@celo-tools/use-contractkit"
import { SnackbarProvider } from "notistack"
import React from 'react';
import "@celo-tools/use-contractkit/lib/styles.css";
import Head from "next/head";
import client from "@/apollo-client";
import {
  Alfajores,
  Mainnet,
} from "@celo-tools/use-contractkit";

export const WalletPage = ({ Component, pageProps }) => {
  return (
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
            {typeof window === "undefined" ? null : (
              <Component {...pageProps} />
            )}
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

  )
}