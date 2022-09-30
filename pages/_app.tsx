import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { store } from "state/store";
import Layout from "components/Layout";
import WalletModal from "components/Modals/WalletModal";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material/styles";
import AppUpdater from "state/app/updater";
import ListsUpdater from "state/lists/updater";
import theme from "theme";
import { connectors } from "connection";

const Web3ReactProviderDefault = dynamic(
	() => import("components/Providers/DefaultProvider"),
	{ ssr: false }
);

declare module "@mui/material/styles" {
	interface Theme {}
	interface ThemeOptions {}
}

const Updaters = () => (
	<>
		<AppUpdater />
		<ListsUpdater />
	</>
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Web3ReactProvider connectors={connectors}>
				<ThemeProvider theme={theme}>
					<Updaters />

					<Layout>
						<Component {...pageProps} />
					</Layout>

					<WalletModal />
				</ThemeProvider>
			</Web3ReactProvider>
		</Provider>
	);
}

export default MyApp;
