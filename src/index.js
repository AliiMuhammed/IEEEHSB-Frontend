// index.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createRoot } from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/index.css";
import "@fontsource/cairo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
  </Provider>
);
