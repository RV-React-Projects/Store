import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/_index.scss";
import { Provider as ReduxStore } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "@redux/store";
import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxStore store={store}>
      <MaterialTailwindThemeProvider>
        <RouterProvider router={App} />
      </MaterialTailwindThemeProvider>
    </ReduxStore>
  </React.StrictMode>
);
