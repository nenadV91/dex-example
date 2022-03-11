import { TokenList } from "@uniswap/token-lists";

export default async function getTokenList(
  listUrl: string
): Promise<TokenList> {
  let response;

  try {
    response = await fetch(listUrl, { credentials: "omit" });
  } catch (error) {
    console.debug("Failed to fetch list", listUrl, error);
  }

  const json = await response?.json();

  return json;
}
