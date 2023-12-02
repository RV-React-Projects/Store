import { memo } from "react";
import { useAppSelector } from "@src/redux/store";
import EmptyCartSVG from "@src/assets/svgs/EmptyCart";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import { map } from "lodash";
import Button from "@material-tailwind/react/components/Button";
import { useNavigate } from "react-router-dom";
import CartItem from "@src/cards/CartItem";

import home1 from "@assets/products/home1.jpg";
import home2 from "@assets/products/home2.jpg";

const breadcrumbData = [{ name: "Cart", path: "/cart" }];
const cartItems = [
  {
    title: "Black Women's Coat Dress",
    discount: 32,
    currentPrice: 129.99,
    normalPrice: 189.98,
    sold: 2975,
    freeShipping: true,
    url: home1,
  },
  {
    title: "Under Armour Men's Tech",
    discount: 25,
    currentPrice: 56.5,
    normalPrice: 75.5,
    sold: 2584,
    freeShipping: true,
    stock: "Stock: 7 left!",
    url: home1,
  },
  {
    title: "Vonanda Velvet Sofa Couch, Mid Century Modern Craftsmanship",
    discount: 37,
    currentPrice: 469.99,
    normalPrice: 755.99,
    sold: 2151,
    freeShipping: true,
    url: home2,
  },
];

function CartPage() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const { cart } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();

  function gotoCheckout() {
    navigate("/cart/checkout");
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      {!cart ? (
        <div className="padding_div">
          <BreadCrumb data={breadcrumbData} />
          <h2 className="my-8 text-4xl font-medium dark:text-gray-200">
            Shopping Cart
          </h2>
          <div className="mx-auto max-w-full justify-center md:flex md:space-x-3 xl:px-0 flex-1">
            <div className="flex[0.7] grid gap-1">
              {map(cartItems, (item, index) => (
                <CartItem
                  key={index}
                  currentPrice={item?.currentPrice}
                  title={item?.title}
                  url={item?.url}
                />
              ))}
            </div>
            {/* <!-- Total Purchase --> */}
            <div className="mt-6 h-full rounded-lg bg-white dark:bg-gray-900 dark:text-gray-200 dark:shadow-sm dark:shadow-white p-6 shadow-md md:mt-0 md:w-1/3 grid gap-2 sticky top-0 flex[0.3]">
              <div className="flex justify-between">
                <p className="text-lg font-bold">Subtotal</p>
                <p className="text-lg font-bold">$129.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-medium">Discount</p>
                <p className="text-base font-bold">- $4.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-medium">Shipping</p>
                <p className="text-base font-bold">$4.99</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-medium">Offer Discount</p>
                <p className="text-base font-bold">- $4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex flex-row justify-between">
                <p className="font-medium">Total</p>
                <div className="">
                  <p className="mb-1 text-2xl font-bold">$134.98</p>
                  <p className="text-sm text-gray-500">including VAT</p>
                </div>
              </div>
              <Button
                variant="gradient"
                color="amber"
                size="lg"
                className="w-full my-3 rounded-full"
                onClick={gotoCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center align-middle min-h-screen">
          <EmptyCartSVG
            color1={isDarkMode ? "#FFEED9" : undefined}
            color2={isDarkMode ? "#4F6F52" : undefined}
            color3={isDarkMode ? "#FAF6F0" : undefined}
            color4={isDarkMode ? "#B6BBC4" : undefined}
          />
          <h1 className="font-medium text-4xl dark:text-white mt-10">
            Your Cart is Empty!
          </h1>
        </div>
      )}
    </div>
  );
}

export default memo(CartPage);
