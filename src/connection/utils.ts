import { ConnectionType, connections } from "./index";
import { Connector } from "@web3-react/types";
import { injectedConnection, walletConnectConnection } from "./index";

export function getConnectionName(connectionType: ConnectionType) {
	switch (connectionType) {
		case ConnectionType.INJECTED:
			return "MetaMask";
		case ConnectionType.WALLET_CONNECT:
			return "WalletConnect";
	}
}

export function getConnection(c: Connector | ConnectionType) {
	if (c instanceof Connector) {
		const connection = connections.find(
			(connection) => connection.connector === c
		);
		if (!connection) {
			throw Error("unsupported connector");
		}
		return connection;
	} else {
		switch (c) {
			case ConnectionType.INJECTED:
				return injectedConnection;
			case ConnectionType.WALLET_CONNECT:
				return walletConnectConnection;
		}
	}
}
