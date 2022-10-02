import { Button } from "@mui/material";

import { useSetModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";

export enum ButtonStatus {
	CONNECT_WALLET = "CONNECT_WALLET",
	UNSUPPORTED_CHAIN = "UNSUPPORTED_CHAIN",
	UNSELECTED_TOKEN = "UNSELECTED_TOKEN",
	NO_AMOUNT = "NO_AMOUNT",
}

interface ButtonProps {
	status: ButtonStatus | undefined;
}

export default function SwapButton({ status }: ButtonProps) {
	const openModal = useSetModalOpen();

	if (!status || status === ButtonStatus.CONNECT_WALLET) {
		return (
			<Button
				onClick={() => openModal(ApplicationModal.WALLET)}
				fullWidth
				variant="contained"
				color="primary"
			>
				Connect your wallet
			</Button>
		);
	} else if (status === ButtonStatus.UNSUPPORTED_CHAIN) {
		return (
			<Button disabled fullWidth variant="contained" color="primary">
				Select a token
			</Button>
		);
	} else if (status === ButtonStatus.UNSELECTED_TOKEN) {
		return (
			<Button fullWidth variant="contained" color="primary">
				Select a token
			</Button>
		);
	} else if (status === ButtonStatus.NO_AMOUNT) {
		return (
			<Button fullWidth variant="contained" color="primary">
				Enter an amount
			</Button>
		);
	}

	return null;
}
