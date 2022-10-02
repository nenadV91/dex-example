import { Connector } from "@web3-react/types";

import METAMASK_ICON_URL from "assets/images/metamaskIcon.png";
import { injectedConnection } from "connection";
import { Option } from "./Option";

export function MetaMaskOption({
	tryActivation,
}: {
	tryActivation: (connector: Connector) => void;
}) {
	const isActive = injectedConnection.hooks.useIsActive();
	return (
		<Option
			isActive={isActive}
			icon={METAMASK_ICON_URL}
			onClick={() => tryActivation(injectedConnection.connector)}
		>
			Metamask
		</Option>
	);
}
