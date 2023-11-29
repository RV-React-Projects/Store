import { memo } from "react";
import { useAppSelector } from "@src/redux/store";
import EmptyCartSVG from "@src/assets/svgs/EmptyCart";

function Cart() {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  return (
    <div className="dark:bg-gray-900  min-h-screen">
      {/* -------------Empty Card----------- */}
      <div className="flex flex-col items-center justify-center align-middle min-h-screen">
        <EmptyCartSVG
          color1={isDarkMode ? "#FFEED9" : undefined}
          color2={isDarkMode ? "#4F6F52" : undefined}
          color3={isDarkMode ? "#FAF6F0" : undefined}
          color4={isDarkMode ? "#B6BBC4" : undefined}
        />
        <h1 className="font-medium text-4xl dark:text-white mt-10">
          Your Cart is Empty!
        </h1>
      </div>
    </div>
  );
}

export default memo(Cart);
