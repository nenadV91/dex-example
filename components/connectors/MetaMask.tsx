import { hooks, metaMask } from "connectors/metaMask";

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

  const provider = useProvider();

  const error = useError();

  return (
    <div className="">
      <b>MetaMask</b>
    </div>
  );
}
