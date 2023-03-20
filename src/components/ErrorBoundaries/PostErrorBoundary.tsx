import { useRouteError } from "react-router-dom";

export const PostsErrorBoundary = () => {
  let error = useRouteError() as Response;

  if (error.status === 404) {
    return <div>This page doesn't exist!</div>;
  }

  return <div>Failed to load posts.</div>;
};
