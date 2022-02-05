import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MetaMask = dynamic(() => import("components/connectors/MetaMask"), {
  ssr: false,
});

const WalletConnect = dynamic(
  () => import("components/connectors/WalletConnect"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <div className="container pt-5 mx-auto">
      <MetaMask />
      <WalletConnect />
    </div>
  );
};

export default Home;
