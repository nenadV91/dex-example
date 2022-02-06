import { Web3ReactHooks } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import useBalances from "hooks/useBalances";

type AccountInfoPropps = {
  accounts: string[] | undefined;
  provider: ReturnType<Web3ReactHooks["useProvider"]>;
};

export default function AccountInfo({ accounts, provider }: AccountInfoPropps) {
  const balances = useBalances(provider, accounts);

  if (!accounts || !accounts.length) return null;

  return (
    <div>
      {accounts.map((acc, i) => (
        <div key={acc}>
          <div>
            <strong>Account: </strong>
            <span>{acc}</span>
          </div>

          <div>
            <strong>Balance: </strong>
            <span>{balances && formatEther(balances[i])}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
