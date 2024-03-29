import { useState } from "react";
import SearchBar from "@src/screen_components/Home/SearchBar";
import SideBar from "@src/screen_components/Home/SideBar";
import HomeCarousel from "@src/screen_components/Home/HomeCarasole";
import HomeCarouselV2 from "@src/screen_components/Home/HomeCarasoleV2";
import BrandsIcons from "@src/screen_components/Home/BrandsIcons";
import TrandingProduct from "@src/screen_components/Tranding/TrandingProduct";
import FeaturedProduct from "@src/screen_components/Home/FeaturedProduct";
import ProductCategories from "@src/screen_components/Home/ProductCategories";

export default function Home() {
  const [searchText, setSearchText] = useState<string>("");

  const onPressSearch = () => {};

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <SearchBar
        value={searchText}
        onChangeText={(val) => setSearchText(val)}
        onPressSearch={onPressSearch}
      />
      <div className="flex mt-8 w-full padding_div flex-1">
        <div className="relative z-10 -mt-20 lg:min-w-[300px] hidden lg:block md:hidden !flex-[0.25]">
          <SideBar />
        </div>
        <div className="!flex-[1] md:flex-[1] lg:max-w-[100%] xl:max-w-[100%] md:w-full md:m-auto">
          <HomeCarouselV2 />
        </div>
      </div>
      <BrandsIcons />
      <TrandingProduct />
      <FeaturedProduct />
      <ProductCategories />
    </div>
  );
}
