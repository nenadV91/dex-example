import type { NextApiRequest, NextApiResponse } from "next";
import { postsBaseUrl } from "../../config/api";
import { Post } from "../../types/posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | undefined>
) {
  const { pid } = req.query;

  const url = `${postsBaseUrl}/${pid}`;

  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
}
