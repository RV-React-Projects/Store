import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import times from "lodash/times";
import images from "@src/common/Images";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, NumberInput } from "keep-react";
import { Tooltip } from "@material-tailwind/react/components/Tooltip";

interface itemCardProps {
  id?: string;
  title?: string;
  discount?: number;
  currentPrice?: number;
  normalPrice?: number;
  sold?: number;
  freeShipping?: boolean;
  URL?: string;
  count?: number;
  onAddToCart?: (id: string) => void;
}

function ItemCard(props: itemCardProps) {
  const {
    id = "",
    title,
    discount,
    currentPrice,
    normalPrice,
    sold,
    freeShipping,
    URL = images.procat1,
    count = 0,
    onAddToCart,
  } = props;

  const [itemCount, setItemCount] = useState(count);

  return (
    <div
      className="rounded-lg flex flex-col text-left lg:max-w-[100%] cursor-pointer h-full group lg:p-1 p-2 bg-inherit hover:shadow-xl hover:dark:shadow-gray-800 transition-all duration-700"
      key={id}
    >
      <div className="relative !overflow-hidden rounded-t-lg !min-w-[25%] group">
        <div className="cursor-pointer bg-white rounded-full absolute z-10 right-0 mt-2 mr-2 p-1 group-hover:-translate-x-1 lg:translate-x-14 duration-300 hover:bg-primary_color hover:text-white">
          <Tooltip content="Wishlist" placement="right">
            <FavoriteBorderOutlinedIcon className="" />
          </Tooltip>
        </div>
        <img
          src={URL}
          alt="menu1"
          className="h-[360px] w-full self-center object-cover transition-transform duration-500 transform-gpu hover:scale-110 "
        />
        {discount && (
          <p className="p-1 absolute right-1 bottom-1 bg-gray-600 bg-opacity-70 rounded-full text-xs text-white">
            {discount}%
          </p>
        )}
      </div>
      <div className="mt-2 px-2">
        <h5 className="font-medium text-base hover:underline hover:text-primary dark:text-gray-400 line-clamp-2 h-12">
          {title}
        </h5>
        <div className="flex items-center my-2">
          {times(5, (index) => (
            <i
              key={index}
              className="ri-star-fill text-[#FFBC02] lg:text-xs xl:text-lg"
            />
          ))}
          <p className="ml-3 dark:text-gray-400 items-center lg:text-xs xl:text-base">
            {" "}
            (2303)
          </p>
        </div>
        <div className="flex flex-row group relative overflow-hidden justify-between">
          <div className="items-end xl:gap-4 gap-2 xl:text-2xl lg:xl:text-xl sm:text-base md:text-lg mb-3">
            <p className="text-secondary font-medium">${currentPrice}</p>
            <p className="line-through text-gray-500 dark:text-gray-600 text-base">
              ${normalPrice}
            </p>
          </div>
          {/* ============ Add to Cart Button =========== */}
          <div className="">
            {itemCount > 0 ? (
              <div className="dark:text-white absolute right-0 bottom-2">
                <NumberInput
                  style={{
                    backgroundColor: "transparent",
                  }}
                  sizing="md"
                  value={itemCount}
                  setValue={setItemCount}
                />
              </div>
            ) : (
              <Tooltip content="Add to Cart" placement="right">
                <Button
                  onClick={() => {
                    onAddToCart && onAddToCart(id);
                    setItemCount(itemCount + 1);
                  }}
                  size="sm"
                  type="primary"
                  circle={true}
                  className="cursor-pointer absolute z-10 right-0 bottom-3 group-hover:-translate-x-1 lg:translate-x-14 duration-300 bg-black dark:bg-primary"
                >
                  <AddShoppingCartIcon
                    className="text-white"
                    fontSize="medium"
                  />
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
        {/* <div className="items-center justify-between text-gray-500 dark:text-gray-400 mt-2 font-medium text-sm">
          <p className="">Sold: {sold}</p>
          {freeShipping && <p className="">Free Shipping</p>}
        </div> */}
      </div>
    </div>
  );
}

export default ItemCard;
