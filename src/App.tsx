import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// ======== Components + Routes ========
const Home = lazy(() => import("@screens/Home/Home"));
const NotFound = lazy(() => import("@screens/NotFound"));
const SignUp = lazy(() => import("@screens/Auth/SignUp"));
const Login = lazy(() => import("@screens/Auth/Login"));
const Layout = lazy(() => import("@src/screens/Layout"));
// ======================================

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route path="auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Home />} />
    </Route>
  )
);

export default App;
