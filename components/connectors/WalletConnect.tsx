import { hooks, walletConnect } from "connectors/walletConnect";

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

  const handleClick = () => {
    walletConnect[isActive ? "deactivate" : "activate"]();
  };

  return (
    <div className="">
      <b>WalletConnect</b>
    </div>
  );
}
