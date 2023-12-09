import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import times from "lodash/times";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, NumberInput } from "keep-react";
import { Tooltip } from "@material-tailwind/react/components/Tooltip";
import { useState } from "react";

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
  onAddToCart?: (id: string) => void;
  onPressItem?: (id: string) => void;
}

function TrandingItemCard(props: TrandingItemCardProps) {
  const {
    id = "234",
    title,
    discount,
    currentPrice,
    normalPrice,
    sold,
    freeShipping,
    URL,
    count = 0,
    onAddToCart,
    onPressItem,
  } = props;

  const [itemCount, setItemCount] = useState(count);

  return (
    <div
      className="rounded-lg flex items-center lg:max-w-[100%] cursor-pointer group h-fit p-3 relative hover:shadow-gray-500 hover:shadow transition-all duration-700 ease-linear"
      key={id}
      onClick={() => onPressItem && onPressItem(id)}
    >
      <div className="relative self-center !overflow-hidden rounded-lg !min-w-[125px] group">
        <div className="cursor-pointer bg-white rounded-full absolute z-10 right-0 mt-2 mr-2 p-1 group-hover:-translate-x-1 lg:translate-x-14 duration-300 hover:bg-primary_color hover:text-white">
          <Tooltip content="WishList" placement="right">
            <FavoriteBorderOutlinedIcon className="" />
          </Tooltip>
        </div>
        <img
          src={URL}
          alt="menu1"
          className="h-[170px] w-[130px] self-center object-cover transition-transform duration-500 transform-gpu hover:scale-110 "
        />
        {discount && (
          <p className="p-1 absolute right-1 bottom-1 bg-gray-600 bg-opacity-70 rounded-full text-xs text-white">
            {discount}%
          </p>
        )}
      </div>
      <div className="ml-4 z-0">
        <h5 className="font-normal hover:underline hover:text-primary dark:text-gray-400 line-clamp-2 h-12">
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
        <div className="flex items-end xl:gap-4 gap-2 xl:text-2xl lg:xl:text-xl sm:text-base md:text-lg">
          <p className="text-secondary font-medium">${currentPrice}</p>
          <p className="line-through text-gray-500 dark:text-gray-600 text-base">
            ${normalPrice}
          </p>
        </div>
        <div className="flex flex-wrap flex-row items-end justify-between">
          <div className="text-gray-500 dark:text-gray-400 mt-2 font-medium text-sm">
            <p className="">Sold: {sold}</p>
            {freeShipping && <p className="">Free Shipping</p>}
          </div>
        </div>
      </div>
      {itemCount > 0 ? (
        <div className="absolute dark:text-white right-2 bottom-2">
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
        <div className="absolute group bottom-3 right-2 overflow-hidden z-10">
          <Tooltip content="Add to Cart" placement="right">
            <Button
              onClick={() => {
                onAddToCart && onAddToCart(id);
                setItemCount(itemCount + 1);
              }}
              className="cursor-pointer group-hover:-translate-x-1 lg:translate-x-14 duration-300 bg-black dark:bg-primary z-10"
              size="sm"
              type="primary"
              circle={true}
            >
              <AddShoppingCartIcon className="text-white" fontSize="medium" />
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default TrandingItemCard;
