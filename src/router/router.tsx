import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";
import { PostsErrorBoundary } from "../components/ErrorBoundaries/PostErrorBoundary";
import { postLoader, postsLoader } from "./loaders";
import { RootErrorBoundary } from "../components/ErrorBoundaries/RootErrorBoundary";
import { Posts } from "../pages/Posts";
import { DeferredComponent } from "../components/DeferredComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <DeferredComponent resolveName="posts">
                <Posts />
              </DeferredComponent>
            ),
            loader: postsLoader,
            errorElement: <PostsErrorBoundary />,
          },
          {
            path: ":postId",
            element: (
              <DeferredComponent resolveName="post">
                <Post />
              </DeferredComponent>
            ),
            loader: postLoader,
            errorElement: <PostsErrorBoundary />,
          },
        ],
      },
    ],
  },
]);

export const sidebarRoutes = router.routes[0].children || null;
