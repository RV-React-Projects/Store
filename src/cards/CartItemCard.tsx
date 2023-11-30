import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { NumberInput } from "keep-react";

interface CartItemCardProps {
  id?: string;
  url?: string;
  title?: string;
  currentPrice?: number;
  count?: number;
  onDelete?: (id: string) => void;
}

function CartItemCard(props: CartItemCardProps) {
  const { id = "", url, title, currentPrice, onDelete, count = 0 } = props;
  const [itemCount, setItemCount] = useState(count);
  return (
    <div>
      <div className="m-1 flex hover:shadow rounded-md p-2 hover:dark:shadow-gray-500 transition-all duration-500 ease-in-out border-b-[0.1px]">
        <img src={url} alt={url} className="w-20 rounded-md" />
        <div className="flex ml-2 w-full">
          <div className="flex w-full flex-col justify-between">
            <div className="flex flex-row items-end justify-between">
              <h6 className="font-medium text-base line-clamp-2 h-12 text-start max-w-[80%]">
                {title}
              </h6>
              <IconButton
                aria-label="delete"
                onClick={() => onDelete && onDelete(id)}
              >
                <DeleteIcon className="text-red-400" />
              </IconButton>
            </div>
            <div className="flex items-center justify-between min-w-[100%]">
              <div className="">
                <p>${currentPrice}</p>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
