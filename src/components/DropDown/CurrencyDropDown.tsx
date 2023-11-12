import { toUpper } from "lodash";
import React, { useEffect, useRef, useState } from "react";

interface CurrencyDropDownProps {
  onPressItem?: (val: string) => void;
  selected: string;
}

const CurrencyDropDown = (props: CurrencyDropDownProps) => {
  const { onPressItem, selected } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const target = event.relatedTarget as HTMLElement;

    // Check if the mouse is leaving to a child element within the dropdown
    if (
      dropdownButtonRef.current &&
      dropdownMenuRef.current &&
      !dropdownButtonRef.current.contains(target) &&
      !dropdownMenuRef.current.contains(target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownButtonRef.current &&
      dropdownMenuRef.current &&
      !dropdownButtonRef.current.contains(event.target as Node) &&
      !dropdownMenuRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <div className="relative inline-block text-left">
        <button
          ref={dropdownButtonRef}
          className="inline-flex justify-center w-full px-0 py-0 text-base font-medium text-gray-700 focus:outline-none bg-none dark:bg-gray-900 dark:text-gray-200 min-w-[70px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {toUpper(selected)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          ref={dropdownMenuRef}
          className={`origin-top-right z-10 absolute right-0 mt-0 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
            isDropdownOpen ? "block" : "hidden"
          } dark:bg-gray-800 dark:text-gray-200`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="py-2 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
            onClick={handleMouseLeave}
          >
            <a
              onClick={() => onPressItem && onPressItem("Usd")}
              className="flex rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              <i className="ri-money-dollar-circle-line mr-2"></i>
              USD
            </a>
            <a
              onClick={() => onPressItem && onPressItem("Euro")}
              className="flex rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              <i className="ri-money-euro-circle-line mr-2"></i>
              EURO
            </a>
            <a
              onClick={() => onPressItem && onPressItem("Gbp")}
              className="flex rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              <i className="ri-money-pound-circle-line mr-2"></i>
              GBP
            </a>
            <a
              onClick={() => onPressItem && onPressItem("Inr")}
              className="flex rounded-md px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              <i className="ri-currency-fill mr-2"></i>
              INR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDropDown;
