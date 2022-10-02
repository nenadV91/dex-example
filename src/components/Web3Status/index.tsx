import { useWeb3React } from "@web3-react/core";
import Button from "@mui/material/Button";

import { useSetModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { shortenAddress } from "utils";

export default function Web3Status() {
	const openModal = useSetModalOpen();

	const { account } = useWeb3React();

	const renderContent = () => {
		if (!account) {
			return <span>Connect wallet</span>;
		} else {
			return <span>{shortenAddress(account)}</span>;
		}
	};

	const handleClick = () => {
		let walletType = null;

		if (!account) {
			walletType = ApplicationModal.WALLET;
		} else {
			walletType = ApplicationModal.ACCOUNT;
		}

		openModal(walletType);
	};

	return (
		<Button onClick={handleClick} variant="contained" color="primary">
			{renderContent()}
		</Button>
	);
}
