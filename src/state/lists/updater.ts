import { useWeb3React } from "@web3-react/core";
import useInterval from "hooks/useInterval";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "state/hooks";
import { useAllLists, useFetchListCallback } from "./hooks";

export default function Updater(): null {
  const { library } = useWeb3React();
  const dispatch = useAppDispatch();

  const lists = useAllLists();

  const fetchList = useFetchListCallback();

  const fetchAllListsCallback = useCallback(() => {
    Object.keys(lists).forEach((url) =>
      fetchList(url).catch((error) =>
        console.debug("interval list fetching error", error)
      )
    );
  }, [fetchList, lists]);

  useInterval(fetchAllListsCallback, library ? 1000 * 60 * 10 : null);

  useEffect(() => {
    Object.keys(lists).forEach((listUrl) => {
      const list = lists[listUrl];

      if (!list.current && !list.loadingRequestId && !list.error) {
        fetchList(listUrl).catch((error) =>
          console.debug("list added fetching error", error)
        );
      }
    });
  }, [dispatch, fetchList, library, lists]);

  return null;
}
