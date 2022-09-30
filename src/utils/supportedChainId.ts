import { SupportedChainId, CHAIN_ID_TO_NAMES } from "constants/chains";

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

export function chainIdToNames(chainId?: number) {
	if (!chainId) return undefined;
	if (!supportedChainId(chainId)) return undefined;

	return CHAIN_ID_TO_NAMES[chainId as SupportedChainId];
}
