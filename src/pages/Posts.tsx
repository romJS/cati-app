import { NavLink, useAsyncValue } from "react-router-dom";
import type { Pages } from "../types/pages";

export const Posts = () => {
  const posts = useAsyncValue() as Pages.PostProps[];

  return (
    <>
      {posts?.length && (
        <div>
          {posts?.map((post: any) => (
            <NavLink
              key={post.id}
              to={`${post.id}`}
              className="flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              {post.title}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
