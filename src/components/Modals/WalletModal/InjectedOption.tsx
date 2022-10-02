import { Connector } from "@web3-react/types";
import { injectedConnection } from "connection";
import Button from "@mui/material/Button";

const METAMASK_PROPS = {
	color: "#E8831D",
	id: "metamask",
};

export function MetaMaskOption({
	tryActivation,
}: {
	tryActivation: (connector: Connector) => void;
}) {
	const isActive = injectedConnection.hooks.useIsActive();
	return (
		<Button onClick={() => tryActivation(injectedConnection.connector)}>
			Metamask
		</Button>
	);
}
