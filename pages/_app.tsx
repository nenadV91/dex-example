import "../styles/globals.css";

import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";

import { store } from "state/store";
import Layout from "components/Layout";
import WalletModal from "components/Modals/WalletModal";
import AccountModal from "components/Modals/AccountModal";
import AppUpdater from "state/app/updater";
import ListsUpdater from "state/lists/updater";

const Web3Provider = dynamic(() => import("components/Web3Provider"), {
	ssr: false,
});

import theme from "theme";

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
			<Web3Provider>
				<ThemeProvider theme={theme}>
					<Updaters />

					<Layout>
						<Component {...pageProps} />
					</Layout>

					<WalletModal />
					<AccountModal />
				</ThemeProvider>
			</Web3Provider>
		</Provider>
	);
}

export default MyApp;
