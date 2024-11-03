import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "../components/Root/Root";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
  ]);

export default routes;