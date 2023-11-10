import { lazy, useEffect } from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { toggleTheme } from "@reducers/ThemeSlice";
// import Home from "@screens/Home/Home";
const Home = lazy(() => import("@screens/Home/Home"));
const Header = lazy(() => import("@components/Common/Header"));
const Footer = lazy(() => import("@components/Common/Footer"));
const NotFound = lazy(() => import("@screens/NotFound"));

function Layout() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const useStoreDispatch = useAppDispatch();

  // console.log("isDarkMode==> ", isDarkMode);

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme:dark").matches) {
      useStoreDispatch(toggleTheme(true));
    } else {
      useStoreDispatch(toggleTheme(false));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

// loader={({ request }) =>
//   fetch("/api/dashboard.json", {
//     signal: request.signal,
//   })
// }

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Home />} />
      <Route path="auth" element={<Home />}>
        <Route path="login" element={<Home />} />
        <Route path="logout" />
      </Route>
    </Route>
  )
);

export default App;
