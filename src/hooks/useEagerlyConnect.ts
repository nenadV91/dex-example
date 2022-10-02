import { useEffect } from "react";
import { Connector } from "@web3-react/types";

import { Connection } from "connection";
import { getConnection } from "connection/utils";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { updateSelectedWallet } from "state/user/reducer";

async function connect(connector: Connector) {
	try {
		if (connector.connectEagerly) {
			await connector.connectEagerly();
		} else {
			await connector.activate();
		}
	} catch (error) {
		console.debug(`web3-react eager connection error: ${error}`);
	}
}

export default function useEagerlyConnect() {
	const dispatch = useAppDispatch();

	const selectedWallet = useAppSelector((state) => state.user.selectedWallet);

	let selectedConnection: Connection | undefined;
	if (selectedWallet) {
		try {
			selectedConnection = getConnection(selectedWallet);
		} catch {
			dispatch(updateSelectedWallet({ wallet: undefined }));
		}
	}

	useEffect(() => {
		if (selectedConnection) {
			connect(selectedConnection.connector);
		} // The dependency list is empty so this is only run once on mount
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
}