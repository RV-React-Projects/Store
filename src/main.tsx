import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider as ReduxStore } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "@redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxStore store={store}>
      <RouterProvider router={App} />
    </ReduxStore>
  </React.StrictMode>
);
