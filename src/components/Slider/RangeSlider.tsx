import { memo, useState } from "react";

function RangeSlider() {
  const [priceRange, setPriceRange] = useState(10);

  const handleSliderChange = (event: any) => {
    const newValue = parseInt(event.target.value, 10);
    setPriceRange(newValue);
  };
  return (
    <div className="my-4">
      <label
        htmlFor="price-range-slider"
        className="text-xl font-medium dark:text-white ml-2"
      >
        Price Range:
      </label>
      <input
        min={10}
        max={1000}
        value={priceRange}
        onChange={handleSliderChange}
        type="range"
        className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none px-2
[&::-webkit-slider-thumb]:w-2.5
[&::-webkit-slider-thumb]:h-2.5
[&::-webkit-slider-thumb]:-mt-0.5
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:transition-all
[&::-webkit-slider-thumb]:duration-150
[&::-webkit-slider-thumb]:ease-in-out
[&::-webkit-slider-thumb]:dark:bg-slate-700

[&::-moz-range-thumb]:w-2.5
[&::-moz-range-thumb]:h-2.5
[&::-moz-range-thumb]:appearance-none
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-4
[&::-moz-range-thumb]:border-blue-600
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:transition-all
[&::-moz-range-thumb]:duration-150
[&::-moz-range-thumb]:ease-in-out

[&::-webkit-slider-runnable-track]:w-full
[&::-webkit-slider-runnable-track]:h-2
[&::-webkit-slider-runnable-track]:bg-gray-100
[&::-webkit-slider-runnable-track]:rounded-full
[&::-webkit-slider-runnable-track]:dark:bg-gray-700

[&::-moz-range-track]:w-full
[&::-moz-range-track]:h-2
[&::-moz-range-track]:bg-gray-100
[&::-moz-range-track]:rounded-full"
        id="basic-range-slider-usage"
      />
      <span className="flex text-lg font-medium dark:text-gray-50 justify-end mt-2 mr-2">
        {" "}
        ${priceRange * 5}{" "}
      </span>
    </div>
  );
}

export default memo(RangeSlider);
