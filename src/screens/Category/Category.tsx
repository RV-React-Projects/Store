import SearchBar from "@src/screen_components/Home/SearchBar";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { CategoryData } from "@src/helpers/DataCategories";
import { capitalize, map, toString } from "lodash";
import { DataTrandingItems } from "@src/helpers/DataTrandingItems";
import ItemCard from "@src/cards/ItemCard";
import ProductCategories from "@src/screen_components/Home/ProductCategories";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import { useNavigate, useParams } from "react-router-dom";
import RangeSlider from "@src/components/Slider/RangeSlider";

function Category() {
  let { catType } = useParams<"catType">();

  const [searchText, setSearchText] = useState<string>("");
  const [state, setState] = useState<{ [key: string]: string[] }>({});
  const navigate = useNavigate();

  // console.log(catType);

  const onPressSearch = () => {};

  const onPressItem = (id: string) => {
    navigate(`/product/${!!id ?? "234"}`);
  };

  const setOptions = (name: string, item: string) => {
    setState((prevState) => {
      const currentItems = prevState[name] || [];
      const itemExists = currentItems.includes(item);
      let updatedItems = itemExists ? currentItems : [...currentItems, item];

      return {
        ...prevState,
        [name]: updatedItems,
      };
    });
  };

  // console.log(state);

  const breadcrumbData = [
    { name: "Category", path: "/category" },
    { name: capitalize(catType), path: `/category/:${catType}` },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <SearchBar
        value={searchText}
        onChangeText={(val) => setSearchText(val)}
        onPressSearch={onPressSearch}
      />
      <div>
        <div className="padding_div">
          <div className="flex flex-row items-center flex-1 justify-between">
            {/* Left Section */}
            <div className="flex-[0.20] overflow-y-auto self-start hidden lg:flex sticky top-10">
              <div className="w-full select-none">
                {CategoryData.map((category, index) => (
                  <div className="mb-5" key={index}>
                    <p className="text-xl font-medium dark:text-white ml-3 mb-2">
                      {category?.title}
                    </p>
                    {map(category?.items, (item, itemIndex) => (
                      <label
                        key={itemIndex}
                        htmlFor={item?.name}
                        className="flex flex-row items-center select-none cursor-pointer h-8 hover:bg-opacity-10 hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-500 rounded-lg group"
                        onClick={() => setOptions(category?.title, item.name)}
                      >
                        <Checkbox
                          id={item.name}
                          className="dark:text-gray-200"
                        />
                        <p className="cursor-pointer flex flex-row items-center justify-between w-full text-sm font-medium text-gray-800 hover:text-black group-hover:text-base transition-all duration-300 dark:text-gray-300 group-hover:dark:text-gray-50">
                          {item.name}
                          <span className="mr-3">{item.count}</span>
                        </p>
                      </label>
                    ))}
                  </div>
                ))}
                <RangeSlider />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 lg:flex-[0.75] overflow-y-auto">
              <BreadCrumb data={breadcrumbData} />
              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {DataTrandingItems.map((item, index) => (
                  <div key={index} className="">
                    <ItemCard
                      URL={item?.image}
                      key={index}
                      id={toString(index)}
                      title={item.title}
                      discount={item.discount}
                      currentPrice={item?.currentPrice}
                      normalPrice={item?.normalPrice}
                      sold={item?.sold}
                      freeShipping={item?.freeShipping}
                      onPressItem={onPressItem}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ProductCategories />
        </div>
      </div>
    </div>
  );
}

export default Category;
