import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";

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
    <Grid container spacing={2}>
      <Grid item xs={8}>
        Page
      </Grid>
    </Grid>
  );
};

export default Home;
