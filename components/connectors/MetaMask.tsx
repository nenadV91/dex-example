import { hooks, metaMask } from "connectors/metaMask";
import ChainSelect from "components/ChainSelect";
import ChainInfo from "components/ChainInfo";
import StatusInfo from "components/StatusInfo";
import AccountInfo from "components/AccountInfo";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function MetaMaskConnect() {
  const chainId = useChainId();
  const accounts = useAccounts();

  const isActive = useIsActive();
  const isActivating = useIsActivating();

  const error = useError();

  return (
    <div className="block p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md ">
      <b>MetaMask</b>

      <StatusInfo
        error={error}
        isActivating={isActivating}
        isActive={isActive}
      />

      <ChainInfo chainId={chainId} />

      <AccountInfo accounts={accounts} />

      <ChainSelect
        isActive={isActive}
        chainId={chainId}
        connector={metaMask}
        error={error}
      />
    </div>
  );
}
