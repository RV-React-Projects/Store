import React, { memo } from "react";

interface EmailBoxTypes {
  value?: string;
  onChangeText?: (val: string) => void;
  onPressButton?: () => void;
}

function EmailBox(props: EmailBoxTypes) {
  const { value, onChangeText, onPressButton } = props;

  return (
    <div className=" w-full block">
      <div className="padding_div !py-6 flex items-center justify-end">
        <div className="relative flex w-full">
          <>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-3 pl-10 w-full text-base text-gray-900 rounded-s-lg bg-white border-none outline-none"
              placeholder="Your Email Address"
              required
              value={value}
              onChange={(e) => onChangeText && onChangeText(e?.target?.value)}
            />
          </>
          <button
            type="submit"
            className="text-white right-2.5 bottom-2.5 bg-primary_color transition-all duration-300 focus:outline-none font-semibold rounded-e-lg text-sm px-4 py-2 hover:bg-primary !w-32"
            onClick={onPressButton}
          >
            Sign UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(EmailBox);
