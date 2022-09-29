import { createAction, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { TokenList } from "@uniswap/token-lists";

export const addList = createAction<string>("list/addList");
export const removeList = createAction<string>("list/removeList");

export const enableList = createAction<string>("list/enableList");
export const disableList = createAction<string>("list/disableList");

export const fetchTokenList: Readonly<{
	pending: ActionCreatorWithPayload<{ url: string; requestId: string }>;
	fulfilled: ActionCreatorWithPayload<{
		url: string;
		tokenList: TokenList;
		requestId: string;
	}>;
	rejected: ActionCreatorWithPayload<{
		url: string;
		errorMessage: string;
		requestId: string;
	}>;
}> = {
	pending: createAction("lists/fetchTokenList/pending"),
	fulfilled: createAction("lists/fetchTokenList/fulfilled"),
	rejected: createAction("lists/fetchTokenList/rejected"),
};
