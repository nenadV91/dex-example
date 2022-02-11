import * as React from "react";
import Button from "@mui/material/Button";
import { useWeb3React } from "@web3-react/core";
import { injected } from "connectors";

export default function WalletConnect() {
  const { activate } = useWeb3React();

  const handleClick = () => {
    activate(injected).catch((error) => {
      console.log("Failed to connect with MetaMask", error);
    });
  };

  return (
    <Button
      sx={{ marginBottom: "10px" }}
      fullWidth
      onClick={handleClick}
      variant="contained"
    >
      Meta mask
    </Button>
  );
}
