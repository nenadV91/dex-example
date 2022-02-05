import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import { INFURA_NETWORK_URLS } from "chains";

export const [walletConnect, hooks] = initializeConnector<any>(
  (actions) =>
    new WalletConnect(actions, {
      rpc: INFURA_NETWORK_URLS,
    }),
  Object.keys(INFURA_NETWORK_URLS).map((id) => Number(id))
);
