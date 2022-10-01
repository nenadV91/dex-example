import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { INFURA_NETWORK_URLS } from "constants/chains";
import { Connector } from "@web3-react/types";

export enum ConnectionType {
	INJECTED = "INJECTED",
	WALLET_CONNECT = "WALLET_CONNECT",
}

export interface Connection {
	connector: Connector;
	hooks: Web3ReactHooks;
	type: ConnectionType;
}

// WalletConnect
export const [walletConnect, walletConnectHooks] =
	initializeConnector<WalletConnect>(
		(actions) =>
			new WalletConnect({
				actions,
				options: {
					rpc: INFURA_NETWORK_URLS,
				},
			})
	);
export const walletConnectConnection: Connection = {
	connector: walletConnect,
	hooks: walletConnectHooks,
	type: ConnectionType.INJECTED,
};

// Injected
export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>(
	(actions) => new MetaMask({ actions })
);
export const injectedConnection: Connection = {
	connector: metaMask,
	hooks: metaMaskHooks,
	type: ConnectionType.INJECTED,
};

export const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
	[metaMask, metaMaskHooks],
	[walletConnect, walletConnectHooks],
];

export const connections = [injectedConnection, walletConnectConnection];
