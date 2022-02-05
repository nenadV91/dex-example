import { createAction } from "@reduxjs/toolkit";

export const setChainId = createAction<number | null>("app/setChainId");
