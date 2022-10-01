import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useWeb3React } from "@web3-react/core";
import Button from "@mui/material/Button";

import Web3Status from "components/Web3Status";
import { chainIdToNames, isSupportedChain } from "utils/supportedChainId";
import * as styled from "./styled";

type NavbarProps = {};

const NetworkSelector = () => {
	const { chainId } = useWeb3React();

	const chainName = chainIdToNames(chainId);
	const isSupported = isSupportedChain(chainId);

	if (!chainId || !isSupported) return null;

	return (
		<Button sx={{ marginRight: "10px" }} variant="outlined" color="inherit">
			{chainName}
		</Button>
	);
};

export default function Navbar({}: NavbarProps) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar elevation={0} color="transparent" position="static">
				<styled.StyledToolbar>
					<div className="left">Web3 app</div>

					<styled.ToolbarRight>
						<NetworkSelector />
						<Web3Status />
					</styled.ToolbarRight>
				</styled.StyledToolbar>
			</AppBar>
		</Box>
	);
}
