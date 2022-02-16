import React, { ReactNode } from "react";
import Navbar from "components/Navbar";
import useEagerConnect from "hooks/useEagerConnect";
import Main from "./Main";

export default function Layout({ children }: { children: ReactNode }) {
  const eagerConnect = useEagerConnect();

  return (
    <>
      <Navbar triedToEagerConnect={eagerConnect} />
      <Main>{children}</Main>
    </>
  );
}
