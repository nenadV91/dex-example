import { Connector } from "@web3-react/types";
import { walletConnectConnection } from "connection";
import Button from "@mui/material/Button";

const BASE_PROPS = {
	color: "#4196FC",
	id: "wallet-connect",
};

export function WalletConnectOption({
	tryActivation,
}: {
	tryActivation: (connector: Connector) => void;
}) {
	const isActive = walletConnectConnection.hooks.useIsActive();
	return (
		<Button onClick={() => tryActivation(walletConnectConnection.connector)}>
			Wallet Connect
		</Button>
	);
}
