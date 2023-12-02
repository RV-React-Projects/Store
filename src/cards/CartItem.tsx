import { memo, useState } from "react";
import { IconButton } from "@mui/material";
import { NumberInput } from "keep-react";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemCardProps {
  id?: string | undefined;
  url?: string;
  title?: string;
  currentPrice?: number;
  count?: number;
  onDelete?: (id: string) => void;
}

function CartItem(props: CartItemCardProps) {
  const { id = "", url, title, currentPrice, onDelete, count = 0 } = props;
  const [itemCount, setItemCount] = useState(count);

  return (
    <div
      key={id}
      className="justify-between rounded-md dark:bg-gray-900 p-3 hover:shadow-md hover:dark:shadow-gray-800 flex sm:justify-start h-44 transition-shadow duration-700 ease-in border-gray-200 dark:border-gray-800 border-[0.5px]"
    >
      <img src={url} alt="product-image" className="rounded-lg w-40" />
      <div className="ml-4 w-full h-full flex flex-col justify-between">
        <div className=" w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <h2 className="sm:text-xl text-base font-bold text-gray-900 dark:text-gray-200 line-clamp-2 sm:h-14 mt-2">
              {title}
            </h2>
            <IconButton
              aria-label="delete"
              // onClick={() => onDelete && onDelete(id)}
              className=""
            >
              <DeleteIcon className="text-red-400" />
            </IconButton>
          </div>
          <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
            $ {currentPrice}
          </p>
        </div>
        <div className="self-end space-y-6 mt-0 block space-x-6">
          <div className="dark:text-gray-300">
            <NumberInput
              style={{
                backgroundColor: "transparent",
                color: "inherit",
              }}
              sizing="md"
              value={itemCount}
              setValue={setItemCount}
              min={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CartItem);
