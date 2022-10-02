import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { MetaMaskOption } from "./InjectedOption";
import { WalletConnectOption } from "./WalletConnectOption";
import { useTryActivation } from "state/connection/hooks";

import * as styled from "../styled";

export default function WalletModal() {
	const isModalOpen = useModalOpen(ApplicationModal.WALLET);
	const closeModal = useSetModalOpen();
	const tryActivation = useTryActivation();

	return (
		<div>
			<Modal open={isModalOpen} onClose={() => closeModal(null)}>
				<styled.ModalContent>
					<styled.TitleSection>
						<Typography>Select a wallet</Typography>
						<IconButton onClick={() => closeModal(null)}>
							<CloseIcon />
						</IconButton>
					</styled.TitleSection>

					<styled.BodySection>
						<MetaMaskOption tryActivation={tryActivation} />
						<WalletConnectOption tryActivation={tryActivation} />
					</styled.BodySection>
				</styled.ModalContent>
			</Modal>
		</div>
	);
}
