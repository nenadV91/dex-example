import { createReducer } from "@reduxjs/toolkit";
import { Field } from "./types";
import { typeInput } from "./actions";

export interface SwapState {
  readonly independendField: Field;
  readonly typedValue: string;
  readonly [Field.INPUT]: {
    readonly currencyId: string | undefined | null;
  };
  readonly [Field.OUTPUT]: {
    readonly currencyId: string | undefined | null;
  };
}

const initialState: SwapState = {
  [Field.INPUT]: {
    currencyId: null,
  },
  [Field.OUTPUT]: {
    currencyId: null,
  },
  typedValue: "",
  independendField: Field.INPUT,
};

export default createReducer<SwapState>(initialState, (builder) =>
  builder.addCase(typeInput, (state, { payload: { field, typedValue } }) => {
    return {
      ...state,
      independendField: field,
      typedValue,
    };
  })
);
