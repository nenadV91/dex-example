import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";
import { MetaMaskOption } from "./Options/InjectedOption";
import { useTryActivation } from "state/connection/hooks";
import usePrevious from "hooks/usePrevious";

import * as styled from "./styled";

export default function WalletModal() {
	const { account } = useWeb3React();
	const prevAccount = usePrevious(account);

	const isModalOpen = useModalOpen(ApplicationModal.WALLET);
	const closeModal = useSetModalOpen();
	const tryActivation = useTryActivation();

	useEffect(() => {
		if (isModalOpen && account !== prevAccount) {
			closeModal(null);
		}
	}, [account, closeModal, isModalOpen, prevAccount]);

	return (
		<div>
			<Modal
				open={isModalOpen}
				onClose={() => closeModal(null)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<styled.ModalContent>
					<styled.TitleSection>
						<Typography>Select a wallet</Typography>
					</styled.TitleSection>

					<styled.BodySection>
						<MetaMaskOption tryActivation={tryActivation} />
					</styled.BodySection>
				</styled.ModalContent>
			</Modal>
		</div>
	);
}
