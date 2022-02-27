import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { Field } from "./types";
import { typeInput, selectCurrency } from "./actions";
import { AppState } from "state/store";
import { Currency } from "@uniswap/sdk-core";

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

  const onCurrencySelection = useCallback(
    (field: Field, currency: Currency) => {
      dispatch(
        selectCurrency({
          field,
          currencyId: currency.isToken
            ? currency.address
            : currency.isNative
            ? "ETH"
            : "",
        })
      );
    },
    [dispatch]
  );

  return {
    onUserInput,
    onCurrencySelection,
  };
}
