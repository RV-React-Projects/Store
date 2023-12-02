import { memo } from "react";
import ShopingCartSVG from "@src/assets/svgs/ShopingCart";
import { useAppSelector } from "@src/redux/store";
import map from "lodash/map";
import FloatingCartItem from "@src/cards/FloatingCartItem";

import home1 from "@assets/products/home1.jpg";
import home2 from "@assets/products/home2.jpg";
import Button from "@material-tailwind/react/components/Button";
import { useNavigate } from "react-router-dom";

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

interface FlotingCartProps {
  toggleShowCart?: () => void;
}

function FloatingCart(props: FlotingCartProps) {
  const { cart } = useAppSelector((state) => state.cart);
  const { toggleShowCart } = props;
  const navigate = useNavigate();

  function gotoCheckout() {
    navigate("/cart/checkout");
    toggleShowCart && toggleShowCart();
  }

  function gotoCart() {
    navigate("/cart");
    toggleShowCart && toggleShowCart();
  }

  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 p-2 mt-0 min-h-[85vh] min-w-[400px] shadow-2xl rounded-md">
      <div className="h-full w-full overflow-auto">
        {!cart ? (
          <div className="relative flex flex-col h-[88vh]">
            <h3 className="text-center my-4">Cart</h3>
            <div className="flex-1 overflow-auto cart-scrollbar">
              <div className="max-h-[80vh]">
                {map(cartItems, (item, index) => (
                  <FloatingCartItem
                    key={index}
                    count={0}
                    currentPrice={item.currentPrice}
                    id="1233232"
                    title={item?.title}
                    url={item?.url}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4">
              <h6>SubTotal :</h6>
              <h3 className="text-3xl font-bold">$ 5000</h3>
              <Button
                variant="gradient"
                // color="indigo"
                size="lg"
                className="w-full my-3 rounded-full capitalize"
                onClick={gotoCheckout}
              >
                Checkout
              </Button>
              <Button
                variant="filled"
                color="amber"
                size="lg"
                className="w-full rounded-full capitalize"
                onClick={gotoCart}
              >
                Go to Cart
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-full w-full justify-center">
            <h1 className="text-xl font-medium text-center my-5 mb-10">Cart</h1>
            <ShopingCartSVG width={"100%"} />
            <h1 className="text-3xl font-medium text-center my-5 mb-10 ">
              Your Cart is Empty!
            </h1>
            <h1 className="text-base font-extralight text-center">
              Please add some item into your Cart!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(FloatingCart);
