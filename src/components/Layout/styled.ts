import { styled } from "@mui/system";

export const BodyWrapper = styled("div")`
	background-color: ${({ theme }) => theme.palette.grey[100]};
`;

export const StyledMain = styled(`main`)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
