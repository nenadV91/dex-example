import { hooks, walletConnect } from "connectors/walletConnect";
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

export default function WalletConnect() {
  const chainId = useChainId();
  const accounts = useAccounts();

  const isActive = useIsActive();
  const isActivating = useIsActivating();

  const error = useError();

  const provider = useProvider();

  if (provider) {
    provider.on("accountsChanged", () => {
      console.log("connected");
    });
  }

  const handleClick = () => {
    walletConnect[isActive ? "deactivate" : "activate"]();
  };

  return (
    <div className="block p-6 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md ">
      <b>WalletConnect</b>

      <StatusInfo
        error={error}
        isActivating={isActivating}
        isActive={isActive}
      />

      <ChainInfo chainId={chainId} />

      <AccountInfo accounts={accounts} />

      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        {isActive ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
