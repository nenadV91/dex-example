import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Web3Status from "components/Web3Status";
import { styled } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { chainIdToNames, isSupportedChain } from "utils/supportedChainId";

type NavbarProps = {};

const StyledToolbar = styled(Toolbar)`
	justify-content: space-between;
`;

const ToolbarRight = styled("div")`
	display: flex;
	align-items: center;
`;

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
	const { chainId } = useWeb3React();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<div className="left">Web3 app</div>

					<ToolbarRight>
						<NetworkSelector />
						<Web3Status />
					</ToolbarRight>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
