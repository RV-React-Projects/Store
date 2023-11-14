import React, { memo } from "react";

interface SearchBarTypes {
  value?: string;
  onChangeText?: (val: string) => void;
  onPressSearch?: () => void;
}

function SearchBar(props: SearchBarTypes) {
  const { value, onChangeText, onPressSearch } = props;

  return (
    <div className="bg-[#f0eaff] dark:bg-[#342a4d] w-full hidden lg:block">
      <div className="padding_div  !py-6 flex items-center justify-end">
        <div className="relative flex w-2/4 ">
          <>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-3 pl-10 w-full text-base text-gray-900 rounded-s-lg bg-white border-none outline-none"
              placeholder="Search Products , Brand..."
              required
              value={value}
              onChange={(e) => onChangeText && onChangeText(e?.target?.value)}
            />
          </>
          <button
            type="submit"
            className="text-white right-2.5 bottom-2.5 bg-blue-700 focus:outline-none font-medium rounded-e-lg text-sm px-4 py-2 dark:bg-blue-600 hover:bg-black !w-24"
            onClick={onPressSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(SearchBar);
