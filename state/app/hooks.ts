import { setChainId } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export function useSetChainid(chainId: number) {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(setChainId(chainId)), [chainId, dispatch]);
}
