import type { NextApiRequest, NextApiResponse } from "next";
import { postsBaseUrl } from "../../config/json-server";
import { Post } from "../../types/posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | undefined>
) {
  const url = `${postsBaseUrl}`;

  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
