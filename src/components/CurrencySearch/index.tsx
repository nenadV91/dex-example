import { styled } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";

type CurrencySearchProps = {};

// function useCombinedActiveList():

// function useAllTokens(): { [address: string]: Token} {
//   const allTokens = useCombinedActiveList()
// }

export default function CurrencySearch({}) {
  const { chainId } = useWeb3React();

  const [searchQuery, setSearchQuery] = useState("");

  return <span>Currency search</span>;
}
