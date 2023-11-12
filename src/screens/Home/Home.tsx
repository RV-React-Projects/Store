import { useState } from "react";
import SerachBox from "@src/components/Search/SerachBox";
import SearchBar from "@src/screen_components/Home/SearchBar";
import SideBar from "@src/screen_components/Home/SideBar";
import HomeCarousel from "@src/screen_components/Home/HomeCarasole";
import CategoryDropDown from "@src/screen_components/Home/CategoryDropDown";
import BrandsIcons from "@src/screen_components/Home/BrandsIcons";

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
      {/* ========== Carousel and Side NAV ========= */}
      <div className="flex mt-8 w-full padding_div flex-1">
        <div className="relative -mt-20 lg:min-w-[300px] hidden lg:block md:hidden !flex-[0.25]">
          <SideBar />
        </div>
        <div className="!flex-[0.8] md:flex-[1] lg:max-w-[75%] md:w-full">
          <HomeCarousel />
        </div>
      </div>
      <BrandsIcons />
      {/* <SideBarTest />
      <CategoryDropDown /> */}
    </div>
  );
}

// lg:w-3/4 md:w-fit
