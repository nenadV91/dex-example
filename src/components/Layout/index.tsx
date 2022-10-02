import React, { ReactNode } from "react";
import Navbar from "components/Navbar";

import * as styled from "./styled";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<styled.BodyWrapper>
			<Navbar />
			<styled.StyledMain>{children}</styled.StyledMain>
		</styled.BodyWrapper>
	);
}
