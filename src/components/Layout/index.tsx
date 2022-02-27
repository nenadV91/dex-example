import React, { ReactNode } from "react";
import Navbar from "components/Navbar";
import useEagerConnect from "hooks/useEagerConnect";
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
  const eagerConnect = useEagerConnect();

  return (
    <>
      <Navbar triedToEagerConnect={eagerConnect} />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
