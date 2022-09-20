import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export function useWalletInfo() {
	const { connector } = useWeb3React();

	return useMemo(() => {
		if (connector instanceof InjectedConnector) {
			return "Injected";
		} else if (connector instanceof WalletConnectConnector) {
			return "WalletConnect";
		} else {
			return undefined;
		}
	}, [connector]);
}
