import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Web3Status from "components/Web3Status";

type NavbarProps = {
  triedToEagerConnect: boolean;
};

export default function Navbar({ triedToEagerConnect }: NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>{triedToEagerConnect && <Web3Status />}</Toolbar>
      </AppBar>
    </Box>
  );
}
