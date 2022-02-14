import React, { ReactNode, useEffect } from "react";
import Navbar from "components/Navbar";
import useEagerConnect from "hooks/useEagerConnect";
import useDisconnect from "hooks/useDisconnect";

export default function Layout({ children }: { children: ReactNode }) {
  const eagerConnect = useEagerConnect();

  useDisconnect();

  return (
    <>
      <Navbar triedToEagerConnect={eagerConnect} />
      <main>{children}</main>
    </>
  );
}
