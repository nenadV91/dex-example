import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";
import { styled } from "@mui/system";

const ModalContent = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 400px;
	background-color: ${({ theme }) => theme.palette.background.paper};
	padding: ${({ theme }) => theme.spacing(2)};
`;

const SpinnerWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	padding: 25px;
`;

const ErrorText = styled(Typography)`
	color: ${({ theme }) => theme.palette.error.main};
`;

export default function WalletModal() {
	const isModalOpen = useModalOpen(ApplicationModal.WALLET);

	const closeModal = useSetModalOpen(null);

	return (
		<div>
			<Modal
				open={isModalOpen}
				onClose={() => closeModal()}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<ModalContent></ModalContent>
			</Modal>
		</div>
	);
}
