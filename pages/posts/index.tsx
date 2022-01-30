import Link from "next/link";
import { Post } from "../types/posts";
import { postsBaseUrl } from "../config/api";

type PostsProps = {
  data: Post[];
};

const Posts = ({ data }: PostsProps) => {
  return (
    <div className="flex flex-col">
      {data.map(({ id, title }) => (
        <Link href={`/posts/${id}`} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(postsBaseUrl);
  const data = await res.json();

  return { props: { data } };
}

export default Posts;
