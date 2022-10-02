export enum ApplicationModal {
	WALLET,
	ACCOUNT,
}

export interface ApplicationState {
	openModal: ApplicationModal | null;
	chainId: number | null;
	blockNumber: { readonly [chainId: number]: number };
}
