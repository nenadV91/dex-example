import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const ModalContent = styled(Box)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 400px;
	background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const SpinnerWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	padding: 25px;
`;

export const ErrorText = styled(Typography)`
	color: ${({ theme }) => theme.palette.error.main};
`;

export const TitleSection = styled("div")`
	padding: ${({ theme }) => theme.spacing(2)};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BodySection = styled("div")`
	padding: ${({ theme }) => theme.spacing(2)};
	display: flex;
	flex-direction: column;
`;
