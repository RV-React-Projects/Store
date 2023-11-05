import { lazy } from "react";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Home from "@screens/Home/Home";
const Home = lazy(() => import("@screens/Home/Home"));
const Header = lazy(() => import("@components/Common/Header"));
const Footer = lazy(() => import("@components/Common/Footer"));
// import Home from "./screens/Home/Home";
// import "./App.css";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route
        path="dashboard"
        element={<Home />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<Home />}>
        <Route path="login" element={<Home />} />
        <Route path="logout" />
      </Route>
    </Route>
  )
);

export default App;
