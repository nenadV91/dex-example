import { createReducer } from "@reduxjs/toolkit";
import { ListsState } from "./types";
import {
	addList,
	removeList,
	enableList,
	disableList,
	fetchTokenList,
} from "./actions";
import {
	DEFAULT_LISTS,
	DEFAULT_ACTIVE_LISTS as initialActiveListUrls,
} from "constants/lists";

const initListState = () => ({
	error: null,
	current: null,
	loadingRequestId: null,
	pendingUpdate: null,
});

const initialByUrl = DEFAULT_LISTS.reduce<any>((acc, url) => {
	acc[url] = initListState();
	return acc;
}, {});

const initialState: ListsState = {
	activeListUrls: initialActiveListUrls,
	byUrl: initialByUrl,
};

export default createReducer(initialState, (builder) => {
	return builder
		.addCase(addList, (state, { payload: listUrl }) => {
			state.byUrl[listUrl] = initListState();
		})
		.addCase(removeList, (state, { payload: listUrl }) => {
			if (state.byUrl[listUrl]) {
				delete state.byUrl[listUrl];
			}

			if (state.activeListUrls && state.activeListUrls.includes(listUrl)) {
				state.activeListUrls = state.activeListUrls.filter(
					(u) => u !== listUrl
				);
			}
		})
		.addCase(enableList, (state, { payload: listUrl }) => {
			if (!state.byUrl[listUrl]) {
				state.byUrl[listUrl] = initListState();
			}

			state.activeListUrls?.push(listUrl);
		})
		.addCase(disableList, (state, { payload: listUrl }) => {
			state.activeListUrls = state.activeListUrls?.filter((l) => l !== listUrl);
		})
		.addCase(
			fetchTokenList.pending,
			(state, { payload: { requestId, url } }) => {
				const current = state.byUrl[url]?.current ?? null;
				const pendingUpdate = state.byUrl[url]?.pendingUpdate ?? null;

				state.byUrl[url] = {
					current,
					pendingUpdate,
					loadingRequestId: requestId,
					error: null,
				};
			}
		);
});
