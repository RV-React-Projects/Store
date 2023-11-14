import images from "@src/common/Images";
import CountdownTimer from "@screen_components/Common/CountdownTimer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import times from "lodash/times";
import { Slider, Tooltip } from "@mui/material";

interface itemCardProps {
  title?: string;
  discount?: number;
  currentPrice?: number;
  normalPrice?: number;
  sold?: number;
  freeShipping?: boolean;
  URL?: string;
}

function ItemCard(props: itemCardProps) {
  const {
    title,
    discount,
    currentPrice,
    normalPrice,
    sold,
    freeShipping,
    URL,
  } = props;

  return (
    <div className="rounded-lg flex items-center lg:max-w-[100%] cursor-pointer w-full group h-fit p-3">
      <div className="relative self-center !overflow-hidden rounded-lg !min-w-[125px] group">
        <div className="cursor-pointer bg-white rounded-full absolute z-10 right-0 mt-2 mr-2 p-1 group-hover:-translate-x-1 lg:translate-x-14 duration-300 hover:bg-primary_color hover:text-white">
          <Tooltip title="WishList" placement="right">
            <FavoriteBorderOutlinedIcon className="" />
          </Tooltip>
        </div>
        <img
          src={URL}
          alt="menu1"
          className=" lg:h-fit max-h-[160px] w-[125px] self-center object-fit transition-transform duration-500 transform-gpu hover:scale-110 "
          // h-[160px]
        />
        {discount && (
          <p className="p-1 absolute right-1 bottom-1 bg-gray-600 bg-opacity-70 rounded-full text-xs text-white">
            {discount}%
          </p>
        )}
      </div>
      <div className="ml-4">
        <h5 className="font-normal hover:underline hover:text-primary dark:text-gray-400">
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
        <div className="items-center justify-between text-gray-500 dark:text-gray-400 mt-2 font-medium text-sm">
          <p className="">Sold: {sold}</p>
          {freeShipping && <p className="">Free Shipping</p>}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
