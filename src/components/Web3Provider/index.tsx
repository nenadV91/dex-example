import { ReactNode } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "connection";
import useEagerlyConnect from "hooks/useEagerlyConnect";

export default function Web3Provider({ children }: { children: ReactNode }) {
	useEagerlyConnect();

	return (
		<Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
	);
}
