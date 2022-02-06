import { BigNumber } from "@ethersproject/bignumber";
import { Web3ReactHooks } from "@web3-react/core";
import { useEffect, useState } from "react";

export default function useBalances(
  provider?: ReturnType<Web3ReactHooks["useProvider"]>,
  accounts?: string[]
): BigNumber[] | undefined {
  const [balances, setBalances] = useState<BigNumber[] | undefined>();

  useEffect(() => {
    if (provider && accounts?.length) {
      let stale = false;

      Promise.all(accounts.map((acc) => provider.getBalance(acc))).then(
        (balances) => {
          if (!stale) {
            setBalances(balances);
          }
        }
      );

      return () => {
        stale = true;
        setBalances(undefined);
      };
    }
  }, [provider, accounts]);

  return balances;
}
