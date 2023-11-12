import images from "@src/common/Images";
import _ from "lodash";
import React from "react";

const brandData = [
  images.zara,
  images.samsung,
  images.oppo,
  images.asus,
  images.hurley,
  images.dng,
];

// dark:bg-[#f6f3ff]

function BrandsIcons() {
  return (
    <div className="flex flex-row items-center justify-around padding_div my-8 select-none flex-wrap cursor-pointer ">
      {_.map(brandData, (brand, index) => (
        <div
          key={index}
          className="opacity-25 transition-opacity duration-200 hover:opacity-100"
        >
          <img src={brand} className="filter dark:invert" />
        </div>
      ))}
    </div>
  );
}

export default BrandsIcons;
