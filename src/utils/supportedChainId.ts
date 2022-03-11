import { SupportedChainId } from "chains";

export function isSupportedChain(
  chainId?: number
): chainId is SupportedChainId {
  if (!chainId) return false;
  return Boolean(SupportedChainId[chainId]);
}

export function supportedChainId(
  chainId?: number
): SupportedChainId | undefined {
  if (isSupportedChain(chainId)) {
    return chainId;
  }

  return undefined;
}
