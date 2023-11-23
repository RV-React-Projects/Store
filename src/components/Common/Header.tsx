import "@styles/_layout.styles.scss";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { toggleTheme } from "@src/redux/reducers/ThemeSlice";
import { setCurrency } from "@src/redux/reducers/HeaderSlice";
import ThemeDropDown from "../DropDown/ThemeDropDown";
import CurrencyDropDown from "../DropDown/CurrencyDropDown";
import Headroom from "react-headroom";
import MainLogo from "@src/screen_components/Header/MainLogo";

export default function Header() {
  const useStoreDispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.header);
  const { isDarkMode } = useAppSelector((state) => state.theme);

  const toggleMainTheme = async (val: string) => {
    console.log(val);
    const isSysDark = await window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    // console.log("sysTheme==>", isSysDark);

    if (val === "system" && isSysDark) {
      useStoreDispatch(toggleTheme(true));
    } else if (val === "system" && !isSysDark) {
      useStoreDispatch(toggleTheme(false));
    } else if (val === "dark") {
      useStoreDispatch(toggleTheme(true));
    } else if (val === "light") {
      useStoreDispatch(toggleTheme(false));
    }
  };

  const toggleCurrency = (val: string) => {
    useStoreDispatch(setCurrency(val));
  };

  return (
    <Headroom
      // onPin={() => console.log("pinned")}
      // onUnpin={() => console.log("unpinned")}
      // wrapperStyle={{ marginBottom: rhythm(1) }}
      style={{
        background: isDarkMode ? "bg-gray-800" : "white",
        boxShadow: "shadow-sm",
        zIndex: 100,
      }}
    >
      <div className="min-w-full select-none shadow-sm dark:shadow-gray-800 dark:bg-gray-900">
        <header className="padding_div hidden lg:block dark:shadow-gray-800">
          {/* ========== Top Options ========== */}
          <nav>
            <>
              <div className="top_nav flex text-sm  justify-end text-center py-1 gap-5 font-medium ">
                <Link to="/auth/signup" className="dark:text-gray-200">
                  SignUp
                </Link>
                <Link to="/user" className="dark:text-gray-200">
                  My Account
                </Link>
                <Link to="/orders" className="dark:text-gray-200">
                  Order Tracking
                </Link>
                <CurrencyDropDown
                  selected={currency}
                  onPressItem={toggleCurrency}
                />
                <ThemeDropDown onPressItem={toggleMainTheme} />
              </div>
            </>
            {/* ========== Top Navigation ============ */}
            <div className="w-full">
              <div className="flex items-end justify-between">
                <div className="flex items-end gap-24 dark:text-gray-200">
                  <MainLogo />
                  <div className=" flex gap-8">
                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        `group ${
                          isActive
                            ? "font-semibold text-primary dark:text-gray-200"
                            : "font-medium"
                        } text-base`
                      }
                    >
                      Home
                      <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                    </NavLink>
                    <NavLink
                      to="/category/shop"
                      className={({ isActive }) =>
                        `group ${
                          isActive
                            ? "font-semibold text-primary dark:text-gray-50"
                            : "font-medium"
                        } text-base`
                      }
                    >
                      Shop
                      <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                    </NavLink>
                    <NavLink
                      to="/category/women"
                      className={({ isActive }) =>
                        `group ${
                          isActive
                            ? "font-semibold text-primary dark:text-gray-50"
                            : "font-medium"
                        } text-base`
                      }
                    >
                      Women
                      <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                    </NavLink>
                    <NavLink
                      to="/category/men"
                      className={({ isActive }) =>
                        `group ${
                          isActive
                            ? "font-semibold text-primary dark:text-gray-50"
                            : "font-medium"
                        } text-base`
                      }
                    >
                      Men
                      <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                    </NavLink>
                    <NavLink
                      to="/category/sport"
                      className={({ isActive }) =>
                        `group ${
                          isActive
                            ? "font-semibold text-primary dark:text-gray-50"
                            : "font-medium"
                        } text-base relative`
                      }
                    >
                      Sports
                      <div className="bg-orange-800 text-white text-center rounded-lg absolute -top-4 -right-8 px-2 text-sm font-normal">
                        New
                      </div>
                      <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                    </NavLink>
                  </div>
                </div>
                <div className="flex gap-5 items-end dark:text-gray-200">
                  <NavLink to="/wishlist" className="relative">
                    <div className="h-5 w-5 rounded-full bg-primary absolute -top-3 -right-2 flex items-center justify-center text-sm text-white">
                      <span>5</span>
                    </div>
                    <FavoriteBorderOutlinedIcon className="text-gray-600 dark:text-gray-200" />
                  </NavLink>
                  <NavLink to="/cart" end className="flex relative items-end">
                    <div className="relative">
                      <div className="h-5 w-5 rounded-full bg-primary absolute -top-3 -right-2 flex items-center justify-center text-sm text-white">
                        <span>5</span>
                      </div>
                      <ShoppingCartOutlinedIcon className="text-gray-600 dark:text-gray-200" />
                    </div>
                    <div className="ml-5 text-center">
                      <p className="text-sm font-normal text-gray-400">Total</p>
                      <p className="text-base font-bold">$ 3437</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </Headroom>
  );
}
