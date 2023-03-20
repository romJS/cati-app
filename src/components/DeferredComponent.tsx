import React from "react";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import type { Components } from "../types/components";

export const DeferredComponent = ({
  children,
  resolveName,
}: Components.DeferredComponentProps) => {
  const loaderData = useLoaderData() as any;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={loaderData[resolveName]}
          errorElement={<div>Something went wrong</div>}
        >
          {React.Children.only(children)}
        </Await>
      </Suspense>
    </>
  );
};
