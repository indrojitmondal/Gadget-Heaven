import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import routes from './routes/Routes';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById("root")).render(
  

  <React.StrictMode>
  <HelmetProvider>
      <RouterProvider router={routes} />
  </HelmetProvider>
</React.StrictMode>
  
);
