import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// ======== Components + Routes ========
const Layout = lazy(() => import("@screens/Layout"));
const NotFound = lazy(() => import("@screens/NotFound"));
const SignUp = lazy(() => import("@screens/Auth/SignUp"));
const Login = lazy(() => import("@screens/Auth/Login"));
const Home = lazy(() => import("@screens/Home/Home"));
const Category = lazy(() => import("@screens/Category/Category"));
const Cart = lazy(() => import("@screens/Cart/Cart"));
const Checkout = lazy(() => import("@screens/Cart/Checkout"));
const Details = lazy(() => import("@screens/Details/ProductDetails"));
// ======================================

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index path="" element={<Home />} />
      <Route path="category" element={<Category />} />
      <Route path="category/:catType" element={<Category />} />
      <Route path="product/:id" element={<Details />} />
      <Route path="cart">
        <Route path="" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="user">
        <Route path="profile" element={<Cart />} />
        <Route path="address" element={<Checkout />} />
        <Route path="wishlist" element={<Checkout />} />
        <Route path="orders" element={<Checkout />} />
      </Route>
      {/* ====== Not in USE for Now ======== */}
      {/* <Route path="auth">
        <Route index path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route> */}
    </Route>
  )
);

export default App;
