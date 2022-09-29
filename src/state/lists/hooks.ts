import { useAppSelector } from "state/hooks";
import { AppState } from "state/store";
import { ListsState } from "./types";

export function useAllLists(): AppState["lists"]["byUrl"] {
	return useAppSelector((state) => state.lists.byUrl);
}

export function useFetchAllLists(lists: ListsState, provider: any) {
	// TODO: continue here
}
