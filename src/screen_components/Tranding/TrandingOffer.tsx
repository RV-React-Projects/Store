import images from "@src/common/Images";
import CountdownTimer from "@screen_components/Common/CountdownTimer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import times from "lodash/times";
import { Tooltip } from "@mui/material";

interface TrandingOfferProps {
  id?: string;
  onPressItem?: (id: string) => void;
}

function TrandingOffer(props: TrandingOfferProps) {
  const { id = "", onPressItem } = props;

  return (
    <div
      onClick={() => onPressItem && onPressItem(id)}
      className="border border-gray-800 rounded-lg py-2 px-5 flex items-center max-w-[400px] cursor-pointer group w-[100%]"
    >
      <div className="flex flex-col">
        <div className="mb-5 self-center">
          <p className="text-center font-medium text-xl mb-2 dark:text-gray-200">
            OFF ENDS AT
          </p>
          <CountdownTimer />
        </div>
        <div className="relative self-center !overflow-hidden rounded-lg group">
          <div className="cursor-pointer bg-white rounded-full absolute z-10 right-0 m-3 mr-2 p-1 group-hover:-translate-x-1 lg:translate-x-14 duration-300 hover:bg-primary_color hover:text-white">
            <Tooltip title="WishList" placement="right">
              <FavoriteBorderOutlinedIcon className="" />
            </Tooltip>
          </div>
          <img
            src={images.tranding}
            alt="menu1"
            className="h-auto w-full self-center object-cover transition-transform duration-500 transform-gpu hover:scale-110 "
          />
        </div>
        <div className="flex items-start text-left align-baseline justify-start mt-4">
          {times(5, (index) => (
            <i key={index} className="ri-star-fill text-[#FFBC02]" />
          ))}
        </div>
        <h5 className="font-semibold text-lg group-hover:underline dark:text-gray-400">
          Happy Sailed Womens Summer Boho Floral
        </h5>
        <div className="flex gap-4 items-end">
          <p className="text-secondary font-semibold text-2xl">$129.99</p>
          <p className="line-through dark:text-gray-600">$189.98</p>
        </div>
        <div className="flex items-center justify-between dark:text-gray-400 mt-2">
          <p className="font-medium">Stock: 107</p>
          <p className="font-medium">Sold: 3,459</p>
        </div>
        <progress
          className="progress progress-primary w-full my-3"
          value="70"
          max="100"
        />
      </div>
    </div>
  );
}

export default TrandingOffer;
