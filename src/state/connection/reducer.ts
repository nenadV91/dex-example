import { createSlice } from "@reduxjs/toolkit";
import { Connector } from "@web3-react/types";
import { ConnectionType } from "connection";

export interface ConnectionState {
	pendingConnectionType: ConnectionType | undefined;
	errorByConnectionType: Record<ConnectionType, string | undefined>;
}

export const initialState: ConnectionState = {
	pendingConnectionType: undefined,
	errorByConnectionType: {
		[ConnectionType.INJECTED]: undefined,
		[ConnectionType.WALLET_CONNECT]: undefined,
	},
};

const connectionSlice = createSlice({
	name: "connection",
	initialState,
	reducers: {
		updateConnectionError(
			state,
			{
				payload: { connectionType, error },
			}: {
				payload: { connectionType: ConnectionType; error: string | undefined };
			}
		) {
			state.errorByConnectionType[connectionType] = error;
		},
		updatePendingConnector(state, { payload: connectionType }) {
			state.pendingConnectionType = connectionType;
		},
	},
});

export const { updateConnectionError, updatePendingConnector } =
	connectionSlice.actions;
export default connectionSlice.reducer;
