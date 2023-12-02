import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import times from "lodash/times";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NumberInput } from "keep-react";
import Tooltip from "@material-tailwind/react/components/Tooltip";
import { memo, useState } from "react";
import Button from "@material-tailwind/react/components/Button";

interface TrandingItemCardProps {
  id?: string;
  title?: string;
  discount?: number;
  currentPrice?: number;
  normalPrice?: number;
  sold?: number;
  freeShipping?: boolean;
  URL?: string;
  count?: number;
  starCount?: number;
  onAddToCart?: (id: string) => void;
}

function TrandingItemCardV2(props: TrandingItemCardProps) {
  const {
    id = "",
    title,
    discount,
    currentPrice,
    normalPrice,
    sold,
    freeShipping,
    URL,
    count = 0,
    starCount = 3,
    onAddToCart,
  } = props;

  const [itemCount, setItemCount] = useState(count);

  return (
    <div className="h-[98%] flex w-full bg-white dark:bg-gray-900 hover:dark:shadow-gray-500 hover:shadow-lg rounded-lg overflow-hidden cursor-pointer group transition-shadow duration-700 ease-in">
      <img
        className="w-[30%] h-auto bg-cover transition-transform duration-500 transform-gpu hover:scale-110 overflow-hidden"
        src={URL}
      />
      <div className="relative rounded-lg">
        <div className="cursor-pointer bg-white rounded-full absolute z-10 right-0 mt-2 mr-2 p-1 group-hover:-translate-x-1 lg:translate-x-14 duration-300 hover:bg-primary_color hover:text-white opacity-0 group-hover:opacity-100">
          <Tooltip content="WishList" placement="right">
            <FavoriteBorderOutlinedIcon className="" />
          </Tooltip>
        </div>
        {discount && (
          <p className="p-1 absolute bottom-1 right-1 bg-gray-600 bg-opacity-70 rounded-full text-xs text-white z-10">
            {discount}%
          </p>
        )}
      </div>
      <div className="w-2/3 pl-4 py-2 flex flex-col justify-between">
        <h1 className="text-gray-900 font-semibold text-lg hover:underline hover:text-primary dark:text-gray-400 line-clamp-1 xl:line-clamp-2 h-8 xl:h-14">
          {title}
        </h1>
        <div>
          <div className="flex item-center">
            {times(5, (index) => (
              <svg
                key={index}
                className={`w-5 h-5 fill-current ${
                  starCount > index
                    ? "text-gray-700 dark:text-gray-500"
                    : "text-gray-500 dark:text-gray-700"
                }  `}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">
            <p className="">Sold: {sold}</p>
            {freeShipping && <p className="">Free Shipping</p>}
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <h1 className="text-gray-900 font-bold text-xl dark:text-gray-300">
            ${currentPrice}
          </h1>
          {itemCount > 0 ? (
            <div className="dark:text-white right-0 bottom-4">
              <NumberInput
                style={{
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
                sizing="sm"
                value={itemCount}
                setValue={setItemCount}
              />
            </div>
          ) : (
            <Button
              variant="gradient"
              size="md"
              className="capitalize"
              onClick={() => {
                onAddToCart && onAddToCart(id);
                setItemCount(itemCount + 1);
              }}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(TrandingItemCardV2);
