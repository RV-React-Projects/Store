import NewsLater from "@src/screen_components/Footer/NewsLater";
import map from "lodash/map";
import { Link } from "react-router-dom";

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
  return (
    <footer className="relative w-full shadow-inner dark:text-gray-200 dark:bg-gray-900 bg-gray-100">
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
      <div className="flex flex-col items-center bg-white py-10 dark:bg-dark_color">
        <Link to="" className="flex items-end my-5">
          <div className="relative w-10 h-10 bg-[#f2f3f5] rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-[#794afa] rounded-full bottom-5 right-5 opacity-40" />
          </div>
          <h3 className="font-bold text-2xl">.Store</h3>
        </Link>
        <div className="flex flex-row gap-1 mb-8">
          <i className="ri-twitter-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-5 p-2 transition-all duration-300 hover:text-light-blue-500"></i>
          <i className="ri-facebook-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 transition-all duration-300 hover:text-blue-700"></i>
          <i className="ri-instagram-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 transition-all duration-300 hover:text-purple-500"></i>
          <i className="ri-linkedin-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 transition-all duration-300 hover:text-blue-600"></i>
          <i className="ri-youtube-line text-3xl h-12 w-12 rounded-full bg-black bg-opacity-10 p-2 transition-all duration-300 hover:text-red-500"></i>
        </div>
        <p className="mb-4 text-center font-medium text-blue-gray-900 md:mb-0 dark:text-gray-200">
          &copy; {currentYear}{" "}
          <a href="https://material-tailwind.com/">.store</a>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
