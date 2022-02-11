import { createReducer } from "@reduxjs/toolkit";
import { setOpenModal } from "./actions";
import { ApplicationState } from "./types";

const initialState: ApplicationState = {
  openModal: null,
};

export default createReducer(initialState, (builder) => {
  return builder.addCase(setOpenModal, (state, { payload }) => {
    state.openModal = payload;
  });
});
