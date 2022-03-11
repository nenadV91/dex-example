import { createReducer } from "@reduxjs/toolkit";
import { TokenList } from "@uniswap/token-lists";
import {
  DEFAULT_ACTIVE_LIST_URLS,
  DEFAULT_LISTS_OF_LISTS,
} from "constants/lists";
import { fetchTokenList } from "./actions";

export interface ListsState {
  readonly byUrl: {
    readonly [url: string]: {
      readonly current: TokenList | null;
      readonly pendingUpdate: TokenList | null;
      readonly loadingRequestId: string | null;
      readonly error: string | null;
    };
  };

  readonly activeListsUrls: string[] | undefined;
}

export type ListState = ListsState["byUrl"][string];
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P];
};

export const NEW_LIST_STATE: ListState = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null,
};

const DEFAULT_LISTS_BY_URL = DEFAULT_LISTS_OF_LISTS.reduce<
  Mutable<ListsState["byUrl"]>
>((r, url) => {
  r[url] = NEW_LIST_STATE;
  return r;
}, {});

const initialState: ListsState = {
  activeListsUrls: DEFAULT_ACTIVE_LIST_URLS,
  byUrl: DEFAULT_LISTS_BY_URL,
};

export default createReducer(initialState, (builder) =>
  builder
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
    )
    .addCase(
      fetchTokenList.fulfilled,
      (state, { payload: { requestId, tokenList, url } }) => {
        const current = state.byUrl[url]?.current;
        const loadingRequestId = state.byUrl[url]?.loadingRequestId;

        if (current) {
          if (loadingRequestId === null || loadingRequestId === requestId) {
            state.byUrl[url] = {
              current,
              pendingUpdate: tokenList,
              loadingRequestId: null,
              error: null,
            };
          }
        } else {
          if (DEFAULT_ACTIVE_LIST_URLS.includes(url)) {
            state.activeListsUrls?.push(url);
          }

          state.byUrl[url] = {
            current: tokenList,
            pendingUpdate: null,
            loadingRequestId: null,
            error: null,
          };
        }
      }
    )
    .addCase(
      fetchTokenList.rejected,
      (state, { payload: { url, requestId, errorMessage } }) => {
        if (state.byUrl[url]?.loadingRequestId !== requestId) {
          return;
        }

        state.byUrl[url] = {
          current: null,
          pendingUpdate: null,
          loadingRequestId: null,
          error: errorMessage,
        };
      }
    )
);
