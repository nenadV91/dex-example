import { useWeb3React } from "@web3-react/core";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";

import { AccountDetails } from "components/AccountDetails";

import * as styled from "../styled";

export default function AccountModal() {
	const { account } = useWeb3React();

	const isModalOpen = useModalOpen(ApplicationModal.ACCOUNT);
	const closeModal = useSetModalOpen();

	return (
		<div>
			<Modal open={isModalOpen} onClose={() => closeModal(null)}>
				<styled.ModalContent>
					<styled.TitleSection>
						<Typography>Account</Typography>
						<IconButton onClick={() => closeModal(null)}>
							<CloseIcon />
						</IconButton>
					</styled.TitleSection>

					<AccountDetails />

					<styled.BodySection>Content</styled.BodySection>
				</styled.ModalContent>
			</Modal>
		</div>
	);
}
