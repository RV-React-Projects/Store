import { lazy, memo, useLayoutEffect } from "react";
import { useAppSelector } from "@redux/store";
import { Outlet, useLocation } from "react-router-dom";

const Header = lazy(() => import("@components/Common/Header"));
const Footer = lazy(() => import("@components/Common/Footer"));

function Layout() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const location = useLocation();

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const routesWithoutHeaderFooter = ["/auth/login", "/auth/signup"];
  const hideHeaderFooter = routesWithoutHeaderFooter.includes(
    location.pathname
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default memo(Layout);
