const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY;

if (typeof INFURA_KEY === "undefined") {
	throw new Error(
		"NEXT_PUBLIC_INFURA_KEY must be a defined environment variable!"
	);
}

export interface NetworkInfo {
	url: string;
	name: string;
	nativeCurrency: {
		name: string;
		symbol: string;
		decimals: number;
	};
}

export enum SupportedChainId {
	MAINNET = 1,
	GOERLI = 5,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
	SupportedChainId.MAINNET,
	SupportedChainId.GOERLI,
];

export const CHAIN_ID_TO_NAMES = {
	[SupportedChainId.MAINNET]: "mainnet",
	[SupportedChainId.GOERLI]: "goerli",
};

export const INFURA_NETWORK_URLS = {
	[SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
	[SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
};

export type Chains = {
	[key: number]: NetworkInfo;
};

export const CHAINS: Chains = {
	[SupportedChainId.MAINNET]: {
		url: INFURA_NETWORK_URLS[SupportedChainId.MAINNET],
		name: CHAIN_ID_TO_NAMES[SupportedChainId.MAINNET],
		nativeCurrency: {
			name: "Ether",
			symbol: "ETH",
			decimals: 18,
		},
	},
	[SupportedChainId.GOERLI]: {
		url: INFURA_NETWORK_URLS[SupportedChainId.GOERLI],
		name: CHAIN_ID_TO_NAMES[SupportedChainId.GOERLI],
		nativeCurrency: {
			name: "Görli Ether",
			symbol: "görETH",
			decimals: 18,
		},
	},
};
