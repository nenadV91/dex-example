import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected, walletconnect } from "connectors";

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: "Injected",
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: "WalletConnect",
  },
};
