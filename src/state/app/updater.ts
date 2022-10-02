import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBlockNumber } from "state/app/actions";
import { useSetModalOpen } from "state/app/hooks";
import usePrevious from "hooks/usePrevious";

export default function AppUpdater(): null {
	const { chainId, provider, account } = useWeb3React();

	const closeModal = useSetModalOpen();
	const prevAccount = usePrevious(account);
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

	useEffect(() => {
		if (account !== prevAccount) {
			closeModal(null);
		}
	}, [account, closeModal, prevAccount]);

	return null;
}
