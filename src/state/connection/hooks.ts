import { useCallback, useEffect } from "react";
import { Connector } from "@web3-react/types";

import { useAppDispatch } from "state/hooks";
import { getConnection } from "connection/utils";

import { updateConnectionError, updatePendingConnector } from "./reducer";

export function useTryActivation() {
	const dispatch = useAppDispatch();

	return useCallback(
		async (connector: Connector) => {
			const connectionType = getConnection(connector).type;

			try {
				// dispatch pending connector to state
				dispatch(updatePendingConnector(connectionType));

				// activate connector
				await connector.activate();
			} catch (error) {
				// console.log error
				console.log(`web3-react connection error: ${error}`);

				// remove pending connector in state
				dispatch(updatePendingConnector(undefined));

				// dispatch connection error to state
				if (error instanceof Error) {
					dispatch(
						updateConnectionError({ connectionType, error: error.message })
					);
				}
			}
		},
		[dispatch]
	);
}
