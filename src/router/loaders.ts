import { defer, LoaderFunctionArgs } from "react-router-dom";
import { get } from "../connector/connector";

export const postsLoader = async () => defer({ posts: get("/posts") });

export const postLoader = async ({ params }: LoaderFunctionArgs) =>
  defer({ post: get(`/posts/${params.postId}`) });
