import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { store } from "state/store";
import Layout from "components/Layout";
import WalletModal from "components/modals/WalletModal";
import getLibrary from "utils/getLibrary";
import dynamic from "next/dynamic";

const Web3ReactProviderDefault = dynamic(
  () => import("components/providers/DefaultProvider"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactProviderDefault getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>

          <WalletModal />
        </Web3ReactProviderDefault>
      </Web3ReactProvider>
    </Provider>
  );
}

export default MyApp;
