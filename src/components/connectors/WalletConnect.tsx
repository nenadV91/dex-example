import * as React from "react";
import Button from "@mui/material/Button";
import { walletconnect } from "connectors";
import { useWeb3React } from "@web3-react/core";

export default function WalletConnect() {
  const { activate } = useWeb3React();

  const handleClick = () => {
    activate(walletconnect).catch((error) => {
      console.log("Failed to connect with WalletConnect", error);
    });
  };

  return (
    <Button
      sx={{ marginBottom: "10px" }}
      fullWidth
      onClick={handleClick}
      variant="contained"
    >
      Wallet connect
    </Button>
  );
}
