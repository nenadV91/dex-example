import Button from "@mui/material/Button";
import { useTryActivation } from "state/wallet/hooks";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { injected, walletconnect, portis } from "connectors";

export interface WalletInfo {
  connector?: AbstractConnector;
  name: string;
}

export enum SupportedWallets {
  INJECTED = "INJECTED",
  WALLET_CONNECT = "WALLET_CONNECT",
  PORTIS = "PORTIS"
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  [SupportedWallets.INJECTED]: {
    connector: injected,
    name: "Injected",
  },
  [SupportedWallets.WALLET_CONNECT]: {
    connector: walletconnect,
    name: "WalletConnect",
  },
  [SupportedWallets.PORTIS]: {
    connector: portis,
    name: 'Portis'
  }
};

export function WalletContent() {
  const tryActivation = useTryActivation();

  return (
    <>
      {Object.entries(SUPPORTED_WALLETS).map(([key, { connector, name }]) => (
        <Button
          fullWidth
          key={key}
          sx={{ marginBottom: "10px" }}
          onClick={() => tryActivation(connector)}
          variant="contained"
        >
          {name}
        </Button>
      ))}
    </>
  );
}
