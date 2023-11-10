import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import _ from "lodash";
import { DropDownTypes } from "@src/common/CommonTypes";

export default function DropDown(props: DropDownTypes) {
  const { data, selected, onlyIcon, onPressItem } = props;
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const selectedData = data?.find((item) => item.value === selected);

  return (
    <div
      className="relative select-none group"
      // onClick={() => setDropdownOpen(true)}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {onlyIcon ? (
        <div className="dark:text-white">
          {!!selected ? data[0].icon : data[0].icon}
        </div>
      ) : (
        <div className="flex items-center dark:text-white">
          <span className="w-10">
            {!!selected ? selectedData?.name : data[0]?.name}
          </span>
          <KeyboardArrowDownIcon className="text-gray-500" />
        </div>
      )}
      {isDropdownOpen && (
        <ul
          className={`absolute border-x-slate-500 bg-gray-100 -ml-3 rounded-md overflow-hidden opacity-0 hidden  group-hover:opacity-100 group-hover:block  ${
            isDropdownOpen ? "opacity-100 block z-10" : "opacity-0 hidden"
          } transition-opacity dark:bg-gray-800 dark:text-gray-50`}
        >
          {_.map(data, (item) => (
            <li
              className=" p-1 px-3 hover:text-gray-700 hover:bg-gray-200 flex cursor-pointer"
              key={item?.value}
              onClick={() => {
                setDropdownOpen(false);
                onPressItem && onPressItem(item?.value);
              }}
            >
              {item?.icon && <div className="mr-1">{item?.icon}</div>}
              <button>{item?.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
