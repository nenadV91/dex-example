import { Connector } from "@web3-react/types";

import WALLET_CONNECT_ICON_URL from "assets/images/walletConnectIcon.svg";
import { walletConnectConnection } from "connection";
import { Option } from "./Option";

export function WalletConnectOption({
	tryActivation,
}: {
	tryActivation: (connector: Connector) => void;
}) {
	const isActive = walletConnectConnection.hooks.useIsActive();

	return (
		<Option
			isActive={isActive}
			icon={WALLET_CONNECT_ICON_URL}
			onClick={() => tryActivation(walletConnectConnection.connector)}
		>
			Wallet Connect
		</Option>
	);
}
