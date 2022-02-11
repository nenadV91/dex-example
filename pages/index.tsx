import type { NextPage } from "next";
import Grid from "@mui/material/Grid";

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
