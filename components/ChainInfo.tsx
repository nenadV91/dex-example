import { CHAINS } from "chains";

type ChainInfoProps = {
  chainId: number | undefined;
};

export default function ChainInfo({ chainId }: ChainInfoProps) {
  if (!chainId) return null;

  if (chainId in CHAINS) {
    return (
      <div>
        <span>Chain: </span>
        <span>{CHAINS[chainId].name}</span>
      </div>
    );
  }

  return null;
}
