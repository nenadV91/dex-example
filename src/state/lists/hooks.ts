import { useCallback } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { TokenList } from "@uniswap/token-lists";
import { useAppDispatch, useAppSelector } from "state/hooks";
import { fetchTokenList } from "./actions";
import getTokenList from "utils/getTokenList";

export function useAllLists(): any {
  return useAppSelector((state) => state.lists.byUrl);
}

export function useActiveListUrls(): string[] | undefined {
  return useAppSelector((state) => state.lists.activeListsUrls);
}

export function useCombinedActiveList(): any {
  const activeListUrls = useActiveListUrls();
}

export function useFetchListCallback(): (
  listUrl: string,
  sendDispatch?: boolean
) => Promise<TokenList | void> {
  const dispatch = useAppDispatch();

  return useCallback(
    async (listUrl: string, sendDispatch = true) => {
      const requestId = nanoid();

      if (sendDispatch) {
        dispatch(fetchTokenList.pending({ requestId, url: listUrl }));
      }

      return getTokenList(listUrl)
        .then((tokenList) => {
          if (sendDispatch) {
            dispatch(
              fetchTokenList.fulfilled({
                url: listUrl,
                tokenList,
                requestId,
              })
            );

            return tokenList;
          }
        })
        .catch((error) => {
          console.debug(`Failed to get list at url ${listUrl}`, error);

          if (sendDispatch) {
            dispatch(
              fetchTokenList.rejected({
                url: listUrl,
                requestId,
                errorMessage: error.message,
              })
            );
          }
        });
    },
    [dispatch]
  );
}
