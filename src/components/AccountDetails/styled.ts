import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const Wrapper = styled("div")`
	background: ${({ theme }) => theme.palette.primary.main};
	margin: 10px;
	color: white;
	padding: 1rem;
	border-radius: 8px;
	width: 500px;
	max-width: 100%;
`;

export const Heading = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& span {
		font-size: 12px;
	}
`;

export const DisconnectButton = styled(Button)`
	color: white;
	border-color: white;

	&:hover {
		border-color: white;
	}
`;

export const Body = styled("div")`
	font-size: 1.2rem;
`;

export const Account = styled("h4")`
	font-weight: 400;
	margin: 10px 0;
`;

export const Options = styled("div")`
	display: flex;
	align-items: center;
	font-size: 12px;

	& svg {
		color: white;
		font-size: 1rem;
	}
`;

export const Option = styled("div")`
	display: flex;
	align-items: center;
	margin-right: 20px;
`;
