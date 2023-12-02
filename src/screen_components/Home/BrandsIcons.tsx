import images from "@src/common/Images";
import _ from "lodash";

const brandData = [
  images.zara,
  images.samsung,
  images.oppo,
  images.asus,
  images.hurley,
  images.dng,
];

function BrandsIcons() {
  return (
    <div className="flex flex-row items-center justify-around padding_div my-8 select-none flex-wrap cursor-pointer">
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
