import { createReducer } from "@reduxjs/toolkit";
import { setChainId } from "./actions";

export interface ApplicationState {
  chainId: number | null;
}

const initialState: ApplicationState = {
  chainId: null,
};

export default createReducer(initialState, (builder) => {
  return builder.addCase(setChainId, (state, { payload }) => {
    state.chainId = payload;
  });
});
