import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { INFURA_NETWORK_URLS } from "constants/chains";

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

export const [metaMask, metaMaskHooks] = initializeConnector<MetaMask>(
	(actions) => new MetaMask({ actions })
);

export const connectors: [MetaMask | WalletConnect, Web3ReactHooks][] = [
	[metaMask, metaMaskHooks],
	[walletConnect, walletConnectHooks],
];
