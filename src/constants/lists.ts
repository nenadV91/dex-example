const COINGECKO_LIST = "https://tokens.coingecko.com/uniswap/all.json";
const GEMINI_LIST = "https://www.gemini.com/uniswap/manifest.json";
const AAVE_LIST = "tokenlist.aave.eth";

const DEFAULT_LIST_OF_LISTS_TO_DISPLAY: string[] = [
  COINGECKO_LIST,
  // AAVE_LIST,
  GEMINI_LIST,
];

export const DEFAULT_ACTIVE_LIST_URLS: string[] = [GEMINI_LIST];

export const DEFAULT_LISTS_OF_LISTS: string[] = [
  ...DEFAULT_LIST_OF_LISTS_TO_DISPLAY,
];
