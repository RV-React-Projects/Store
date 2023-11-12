import "@styles/_layout.styles.scss";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DropDown from "@components/DropDown/DropDown";
import { headerDataTypes } from "@src/common/CommonTypes";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { toggleTheme } from "@src/redux/reducers/ThemeSlice";
import { setCurrency } from "@src/redux/reducers/HeaderSlice";
import ThemeDropDown from "../DropDown/ThemeDropDown";
import CurrencyDropDown from "../DropDown/CurrencyDropDown";

const currencyData: headerDataTypes[] = [
  { name: "USD", value: "usd" },
  { name: "EURO", value: "euro" },
  { name: "GBP", value: "gbp" },
  { name: "INR", value: "idr" },
];

const themeData: headerDataTypes[] = [
  { name: "Light", value: "light", icon: <LightModeIcon /> },
  { name: "Dark", value: "dark", icon: <DarkModeIcon /> },
  { name: "System", value: "system", icon: <SettingsIcon /> },
];

export default function Header() {
  const useStoreDispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.header);

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
    <header className="header_container min-w-full select-none shadow-sm dark:bg-gray-900">
      {/* ========== Top Options ========== */}
      <>
        <div className="top_nav flex text-sm  justify-end text-center py-1 gap-5 font-medium ">
          <Link to="/signup" className="dark:text-gray-200">
            SignUp
          </Link>
          <Link to="/user" className="dark:text-gray-200">
            My Account
          </Link>
          <Link to="/orders" className="dark:text-gray-200">
            Order Tracking
          </Link>
          <CurrencyDropDown selected={currency} onPressItem={toggleCurrency} />
          <ThemeDropDown onPressItem={toggleMainTheme} />
        </div>
      </>
      {/* ========== Top Navigation ============ */}
      <div className="py-2 w-full">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-24 dark:text-gray-200">
            <Link to="" className="flex items-end">
              <div className="relative w-10 h-10 bg-[#f2f3f5] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#794afa] rounded-full bottom-5 right-5 opacity-40"></div>
              </div>
              <h3 className="font-bold text-xl">.Store</h3>
            </Link>
            <div className=" flex gap-8">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "font-semibold text-primary dark:text-gray-200"
                      : "font-medium"
                  } text-base`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold text-primary" : "font-medium"
                  } text-base`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold text-primary" : "font-medium"
                  } text-base`
                }
              >
                Women
              </NavLink>
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold text-primary" : "font-medium"
                  } text-base`
                }
              >
                Men
              </NavLink>
              <NavLink
                to="/category"
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold text-primary" : "font-medium"
                  } text-base relative`
                }
              >
                Sports
                <div className="bg-orange-800 text-white text-center rounded-lg absolute -top-4 -right-8 px-2 text-sm font-normal">
                  New
                </div>
              </NavLink>
            </div>
          </div>
          <div className="flex gap-5 items-end dark:text-gray-200">
            <NavLink to="/wishlist" className="relative">
              <div className="h-5 w-5 rounded-full bg-primary absolute -top-3 -right-2 text-center text-sm text-white">
                5
              </div>
              <FavoriteBorderOutlinedIcon className="text-gray-600 dark:text-gray-200" />
            </NavLink>
            <NavLink to="/cart" className="flex relative items-end">
              <div className="relative">
                <div className="h-5 w-5 rounded-full bg-primary absolute -top-3 -right-2 text-center text-sm text-white">
                  5
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
    </header>
  );
}
