import { TokenList } from "@uniswap/token-lists";

export interface ListsState {
	readonly byUrl: {
		readonly [url: string]: {
			readonly current: TokenList | null;
			readonly pendingUpdate: TokenList | null;
			readonly loadingRequestId: string | null;
			readonly error: string | null;
		};
	};

	readonly activeListUrls: string[] | undefined;
}
