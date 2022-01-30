import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Post } from "../types/posts";
import { postsBaseUrl } from "../config/api";

type PostProps = {
  data: Post;
};

const Post = ({ data }: PostProps) => {
  const router = useRouter();

  return (
    <div className="container">
      <h1>{data.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.query;
  const res = await fetch(`${postsBaseUrl}/${pid}`);
  const data = await res.json();

  return { props: { data } };
};

export default Post;
