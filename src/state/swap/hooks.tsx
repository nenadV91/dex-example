import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { Field } from "./types";
import { typeInput } from "./actions";
import { AppState } from "state/store";

export function useSwapState(): AppState["swap"] {
  return useAppSelector((state) => state.swap);
}

export function useSwapActionHandlers() {
  const dispatch = useAppDispatch();
  const onUserInput = useCallback(
    (field: Field, typedValue: string) => {
      dispatch(typeInput({ field, typedValue }));
    },
    [dispatch]
  );

  return {
    onUserInput,
  };
}
