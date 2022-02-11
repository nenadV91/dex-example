import { setOpenModal } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { ApplicationModal } from "./types";

import { RootState } from "state/store";

export function useSetModalOpen(payload: ApplicationModal | null) {
  const dispatch = useDispatch();
  return useCallback(
    () => dispatch(setOpenModal(payload)),
    [dispatch, payload]
  );
}

export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useSelector((state: RootState) => state.app.openModal);
  return openModal === modal;
}
