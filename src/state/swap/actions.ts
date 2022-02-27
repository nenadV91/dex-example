import { createAction } from "@reduxjs/toolkit";
import { Field } from "./types";

export const typeInput =
  createAction<{ field: Field; typedValue: string }>("swap/typeInput");

export const selectCurrency = createAction<{
  field: Field;
  currencyId: string;
}>("swap/selectCurrency");
