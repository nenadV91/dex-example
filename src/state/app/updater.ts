import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBlockNumber } from "state/app/actions";

export default function AppUpdater(): null {
	const { chainId, provider } = useWeb3React();
	const dispatch = useDispatch();

	const blockNumberCallback = useCallback(
		(blockNumber: number) => {
			if (!chainId) {
				return;
			}

			dispatch(updateBlockNumber({ chainId, blockNumber }));
		},
		[chainId, dispatch]
	);

	useEffect(() => {
		if (!provider) return;

		provider
			.getBlockNumber()
			.then(blockNumberCallback)
			.catch((err: Error) =>
				console.error(`Failed to get block number for chainId: ${chainId}`, err)
			);

		provider.on("block", blockNumberCallback);

		return () => {
			provider.removeListener("block", blockNumberCallback);
		};
	}, [blockNumberCallback, chainId, provider]);

	return null;
}
