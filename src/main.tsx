import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/_index.scss";
import { Provider as ReduxStore } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "@redux/store";
import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
import Skeleton from "@mui/material/Skeleton";
import { loadUserTheme } from "@reducers/ThemeSlice";

store.dispatch(loadUserTheme());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxStore store={store}>
      <MaterialTailwindThemeProvider>
        <Suspense
          fallback={
            <Skeleton
              sx={{ bgcolor: "grey.500" }}
              variant="rectangular"
              width={"100%"}
              height={"100%"}
            />
          }
        >
          <RouterProvider router={App} />
        </Suspense>
      </MaterialTailwindThemeProvider>
    </ReduxStore>
  </React.StrictMode>
);
