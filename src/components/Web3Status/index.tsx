import Button from "@mui/material/Button";
import { useSetModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useWeb3React } from "@web3-react/core";

export default function Web3Status() {
	const openModal = useSetModalOpen(ApplicationModal.WALLET);

	const { account } = useWeb3React();

	return (
		<Button
			onClick={openModal}
			sx={{ marginLeft: "auto" }}
			variant="outlined"
			color="inherit"
		>
			Status
		</Button>
	);
}
