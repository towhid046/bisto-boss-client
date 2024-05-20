import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import routes from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
