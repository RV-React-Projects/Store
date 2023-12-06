import Svgs from "@src/common/Svgs";
import NewsLater from "@src/screen_components/Footer/NewsLater";
import MainLogo from "@src/screen_components/Header/MainLogo";
import map from "lodash/map";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DataFooter = [
  {
    title: "Help & Contact",
    links: [
      { text: "Your Account", url: "" },
      { text: "Your Orders", url: "" },
      { text: "Shipping Rates", url: "" },
      { text: "Returns", url: "" },
      { text: "Assistant", url: "" },
      { text: "Help", url: "" },
      { text: "Contact us", url: "" },
    ],
  },
  {
    title: "Product Categories",
    links: [
      { text: "Beauty", url: "" },
      { text: "Electronic", url: "" },
      { text: "Women's Fashion", url: "" },
      { text: "Girl's Fashion", url: "" },
      { text: "Boy's Fashion", url: "" },
      { text: "Health & Household", url: "" },
      { text: "Home & Kitchen", url: "" },
      { text: "Pet Supplies", url: "" },
      { text: "Sports", url: "" },
    ],
  },
  {
    title: "Payment Info",
    links: [
      { text: "Business Card", url: "" },
      { text: "Shop with Points", url: "" },
      { text: "Reload Your Balance", url: "" },
      { text: "Paypal", url: "" },
    ],
  },
  {
    title: "About Us",
    links: [
      { text: "Company info", url: "" },
      { text: "News", url: "" },
      { text: "Investors", url: "" },
      { text: "Careers", url: "" },
      { text: "Policies", url: "" },
      { text: "Customer reviews", url: "" },
    ],
  },
];
const currentYear = new Date().getFullYear();

export default function Footer() {
  const [currentFooter, setCurrentFooter] = useState<string | null>(null);
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  return (
    <footer className="relative w-full shadow-inner dark:text-gray-200 dark:bg-gray-900 bg-gray-50">
      <NewsLater />
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {map(DataFooter, (item, index) => (
            <div key={index} className="w-full">
              <p className="mb-4 font-semibold uppercase dark:text-gray-100">
                {item?.title}
              </p>
              <ul className="space-y-1">
                {item?.links.map((link, key) => (
                  <p key={key} className="font-normal text-sm text-gray-500">
                    <Link
                      to={link.url}
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105 dark:hover:text-gray-200 hover:text-gray-900"
                    >
                      {link?.text}
                    </Link>
                  </p>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-white py-10 dark:bg-dark_color pb-20 lg:pb-10">
        <MainLogo />
        <div className="flex flex-row gap-1 p-2 mb-8">
          <i className="ri-twitter-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-5 p-2 flex items-center justify-center transition-all duration-300 hover:text-light-blue-500"></i>
          <i className="ri-facebook-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 flex items-center justify-center transition-all duration-300 hover:text-blue-700"></i>
          <i className="ri-instagram-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 flex items-center justify-center transition-all duration-300 hover:text-purple-500"></i>
          <i className="ri-linkedin-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 flex items-center justify-center transition-all duration-300 hover:text-blue-600"></i>
          <i className="ri-youtube-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 flex items-center justify-center transition-all duration-300 hover:text-red-500"></i>
        </div>
        <p className="mb-4 text-center font-medium text-blue-gray-900 md:mb-0 dark:text-gray-200">
          &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/">.store</a>. All Rights
          Reserved.
        </p>
      </div>
      <div className="btm-nav lg:hidden visible bg-white dark:bg-gray-800 shadow-lg z-50">
        <button
          className={`dark:hover:text-gray-50 dark:text-gray-400 text-gray-900 transition-colors duration-500 ease-linear ${
            currentFooter === "Tranding"
              ? "active bg-gray-200 dark:bg-gray-900"
              : ""
          }`}
          onClick={() => {
            setCurrentFooter("Tranding");
            navigate("category/shop");
            scrolltoTop();
          }}
        >
          <Svgs.Tranding
            className="h-7 w-7 "
            stroke="currentColor"
            fill="currentColor"
          />
          <span className="btm-nav-label text-sm font-thin">Tranding</span>
        </button>
        <button
          className={`dark:hover:text-gray-50 dark:text-gray-400 text-gray-900 transition-colors duration-500 ease-linear ${
            currentFooter === "Account"
              ? "active bg-gray-200 dark:bg-gray-900"
              : ""
          }`}
          onClick={() => {
            setCurrentFooter("Account");
            navigate("profile");
            scrolltoTop();
          }}
        >
          <Svgs.User
            className="h-7 w-7 "
            stroke="currentColor"
            fill="currentColor"
          />

          <span className="btm-nav-label text-sm font-thin">Account</span>
        </button>
        <button
          className={`dark:hover:text-gray-50 dark:text-gray-400 text-gray-900 transition-colors duration-500 ease-linear ${
            currentFooter === "Search"
              ? "active bg-gray-200 dark:bg-gray-900"
              : ""
          }`}
          onClick={() => {
            setCurrentFooter("Search");
            navigate("/search");
            scrolltoTop();
          }}
        >
          <Svgs.Search
            className="h-7 w-7 "
            stroke="currentColor"
            fill="currentColor"
          />
          <span className="btm-nav-label text-sm font-thin">Search</span>
        </button>
        <button
          className={`dark:hover:text-gray-50 dark:text-gray-400 text-gray-900 transition-colors duration-500 ease-linear ${
            currentFooter === "Wishlist"
              ? "active bg-gray-200 dark:bg-gray-900"
              : ""
          }`}
          onClick={() => {
            setCurrentFooter("Wishlist");
            navigate("wishlist");
            scrolltoTop();
          }}
        >
          <Svgs.Heart className="h-7 w-7 " stroke="currentColor" fill="none" />
          <span className="btm-nav-label text-sm font-thin">Wishlist</span>
        </button>
        <button
          className={`dark:hover:text-gray-50 dark:text-gray-400 text-gray-900 transition-colors duration-500 ease-linear ${
            currentFooter === "Cart"
              ? "active bg-gray-200 dark:bg-gray-900"
              : ""
          }`}
          onClick={() => {
            setCurrentFooter("Cart");
            navigate("cart");
            scrolltoTop();
          }}
        >
          <span className="absolute text-sm font-medium top-0 right-1/3 text-white bg-primary rounded-full h-5 w-5 ">
            5
          </span>
          <Svgs.Cart className="h-7 w-7 " stroke="currentColor" fill="none" />
          <span className="btm-nav-label text-sm font-thin">Cart</span>
        </button>
      </div>
    </footer>
  );
}
