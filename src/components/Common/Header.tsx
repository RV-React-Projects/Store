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
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { navigationData } from "@src/screen_components/Header/HeaderCategory";
import { toLower } from "lodash";
import FloatingCart from "@src/components/Cart/FloatingCart";

export default function Header() {
  const useStoreDispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.header);
  const { isDarkMode } = useAppSelector((state) => state.theme);

  const [openPopover, setOpenPopover] = useState(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  const handlePopoverEnter = (category: any) => {
    setOpenPopover(category);
  };

  const handlePopoverLeave = () => {
    setOpenPopover(null);
  };

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
                    <Popover.Group className="">
                      <div className="flex h-full space-x-8">
                        {navigationData.categories.map((category, index) => (
                          <div key={index}>
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button
                                      // onMouseEnter={() => seIsOpen(true)}
                                      // onMouseLeave={() => seIsOpen(false)}
                                      onMouseEnter={() =>
                                        handlePopoverEnter(category.name)
                                      }
                                      onMouseLeave={handlePopoverLeave}
                                    >
                                      <NavLink
                                        to={`/category/${toLower(
                                          category?.name
                                        )}`}
                                        className={({ isActive }) =>
                                          `group ${
                                            isActive
                                              ? "font-semibold text-primary dark:text-gray-50"
                                              : "font-medium"
                                          } text-base`
                                        }
                                      >
                                        {category.name}
                                        <div className="w-0 group-hover:w-full h-0.5 bg-black dark:bg-white ease-in-out duration-500" />
                                      </NavLink>
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    // show={isOpen || open}
                                    show={openPopover === category.name}
                                    enter="transition ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    appear
                                    static
                                  >
                                    <Popover.Panel
                                      className="absolute inset-x-0 top-full text-sm text-gray-500 "
                                      onMouseEnter={() =>
                                        handlePopoverEnter(category.name)
                                      }
                                      onMouseLeave={handlePopoverLeave}
                                    >
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white dark:bg-dark_color shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white dark:bg-dark_color -top-3">
                                        <div className="mx-auto max-w-7xl px-8">
                                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                              {category.sections.map(
                                                (section) => (
                                                  <div key={section.name}>
                                                    <p
                                                      id={`${section.name}-heading`}
                                                      className="font-medium text-gray-900 dark:text-white"
                                                    >
                                                      {section.name}
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby={`${section.name}-heading`}
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {section.items.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <Link
                                                              to={item.href}
                                                              className="hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 transition-all ease-in-out duration-300"
                                                            >
                                                              {item.name}
                                                            </Link>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className="group relative text-base sm:text-sm"
                                                >
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <a
                                                    href={item.href}
                                                    className="mt-6 block font-medium text-gray-900 dark:text-gray-200"
                                                  >
                                                    <span
                                                      className="absolute inset-0 z-10"
                                                      aria-hidden="true"
                                                    />
                                                    {item.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          </div>
                        ))}
                      </div>
                    </Popover.Group>
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
                  <div className="group relative">
                    <NavLink
                      to="/cart"
                      end
                      className="flex relative items-end"
                      onMouseEnter={() => setShowCart(true)}
                      onMouseLeave={() => setShowCart(false)}
                      onClick={() => setShowCart(!showCart)}
                    >
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-primary absolute -top-3 -right-2 flex items-center justify-center text-sm text-white">
                          <span>5</span>
                        </div>
                        <ShoppingCartOutlinedIcon className="text-gray-600 dark:text-gray-200" />
                      </div>
                      <div className="ml-5 text-center">
                        <p className="text-sm font-normal text-gray-400">
                          Total
                        </p>
                        <p className="text-base font-bold">$ 3437</p>
                      </div>
                    </NavLink>
                    {showCart && (
                      <div
                        className="hidden absolute opacity-0 right-0 transition-all duration-500 group-hover:opacity-100 group-hover:block"
                        onMouseEnter={() => setShowCart(true)}
                        onMouseLeave={() => setShowCart(false)}
                      >
                        <FloatingCart
                          toggleShowCart={() => setShowCart(!showCart)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </Headroom>
  );
}
