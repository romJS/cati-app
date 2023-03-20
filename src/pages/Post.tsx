import { useAsyncValue, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import type { Pages } from "../types/pages";

export const Post = () => {
  const post = useAsyncValue() as Pages.PostProps;
  const navigate = useNavigate();

  const { body, id, title } = post;

  return (
    <>
      {post && (
        <>
          <div className="text-white">
            <h1>Post ID: {id}</h1>
            <p>Post title: {title}</p>
            <p>Post body: {body}</p>
          </div>
          <Button
            className="border border-white px-4 py-2 text-white my-10"
            name="Go Back"
            onClick={() => navigate(-1)}
          />
        </>
      )}
    </>
  );
};
