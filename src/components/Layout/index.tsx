import React, { ReactNode } from "react";
import Navbar from "components/Navbar";
import { styled } from "@mui/system";

const BodyWrapper = styled("div")`
	background-color: ${({ theme }) => theme.palette.grey[100]};
`;

const StyledMain = styled(`main`)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<BodyWrapper>
			<Navbar />
			<StyledMain>{children}</StyledMain>
		</BodyWrapper>
	);
}
