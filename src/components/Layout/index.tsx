import React, { ReactNode } from "react";
import Navbar from "components/Navbar";
import { styled } from "@mui/system";

const StyledMain = styled(`main`)`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.palette.grey[100]};
`;

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<StyledMain>{children}</StyledMain>
		</>
	);
}
