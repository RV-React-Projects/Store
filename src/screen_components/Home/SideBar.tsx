import map from "lodash/map";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const categoriesData = [
  {
    name: "Beauty",
    icon: "ri-bear-smile-line",
    subcategories: [
      "Makeup",
      "Skin Care",
      "Hair Care",
      "Fragrances",
      "Foot & Hand Care",
      "Tools & Accessories",
      "Shave & Hair Removal",
      "Personal Care",
    ],
  },
  {
    name: "Electronic",
    icon: "ri-bluetooth-connect-line",
    subcategories: [
      "Camera",
      "Cell Phones",
      "Computers",
      "GPS & Navigation",
      "Headphones",
      "Home Audio",
      "Television",
      "Video Projectors",
      "Wearable Technology",
    ],
  },
  {
    name: "Women's Fashion",
    icon: "ri-t-shirt-air-line",
    subcategories: [
      "Clothing",
      "Shoes",
      "Jewelry",
      "Watches",
      "Handbags",
      "Accessories",
    ],
  },
  {
    name: "Men's Fashion",
    icon: "ri-shirt-line",
  },
  {
    name: "Girl's Fashion",
    icon: "ri-user-5-line",
  },
  {
    name: "Boy's Fashion",
    icon: "ri-user-6-line",
  },
  {
    name: "Health & Household",
    icon: "ri-heart-pulse-line",
  },
  {
    name: "Home & Kitchen",
    icon: "ri-home-8-line",
    subcategories: [
      {
        name: "Kitchen & Dining",
        items: [
          "Kitchen",
          "Dining Room",
          "Pantry",
          "Great Room",
          "Breakfast Nook",
        ],
      },
      {
        name: "Living",
        items: ["Living Room", "Family Room", "Sunroom"],
      },
      {
        name: "Bed & Bath",
        items: [
          "Bathroom",
          "Powder Room",
          "Bedroom",
          "Storage & Closet",
          "Baby & Kids",
        ],
      },
      {
        name: "Utility",
        items: ["Laundry", "Garage", "Mudroom"],
      },
      {
        name: "Outdoor",
        items: [
          "Landscape",
          "Patio",
          "Deck",
          "Pool",
          "Backyard",
          "Porch",
          "Exterior",
          "Outdoor Kitchen",
          "Front Yard",
          "Driveway",
          "Poolhouse",
        ],
      },
    ],
  },
  {
    name: "Pet Supplies",
    icon: "ri-android-line",
  },
  {
    name: "Sports",
    icon: "ri-basketball-line",
  },
  {
    name: "Best Seller",
    icon: "ri-shield-star-line",
  },
];

interface Subcategory {
  name: string;
  items: string[];
}

export default function SideBar() {
  const [subCatgories, setSubCatgories] = useState<
    string[] | Subcategory[] | undefined | null
  >(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [itemIndex, setitemIndex] = useState<number>(0);

  // console.log("subCatgories==>", subCatgories, itemIndex);

  useEffect(() => {
    const subcategories = categoriesData[itemIndex]?.subcategories;
    if (subcategories) {
      setSubCatgories(subcategories);
    } else setSubCatgories(null);
  }, [itemIndex]);

  return (
    <div className="dpt-menu pr-5">
      <div className="rounded-xl overflow-visible">
        <div className="bg-[#ff6b6b] p-4 overflow-hidden rounded-t-md">
          <p className="text-lg text-white">All Department</p>
          <p className="mt-2 text-white">Total 2000+ Products</p>
        </div>
        <div className="group">
          <ul
            className="bg-gray-50 dark:bg-gray-800 shadow-md !overflow-visible relative group"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
          >
            {map(categoriesData, (category, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setitemIndex(index);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative ${
                  isHovered ? "text-blue-500" : "text-gray-800"
                }`}
              >
                {index !== 0 && (
                  <div className="border-b border-gray-400"></div>
                )}
                <div className="flex items-center p-2 pl-4 text-gray-800 dark:text-gray-500 dark:hover:text-gray-300 hover:text-gray-500 transition-colors duration-300 ease-in-out cursor-pointer">
                  <i className={category?.icon} />
                  <p className="text-sm font-medium">{category?.name}</p>
                </div>
              </li>
            ))}
            <div
              className={`${
                isHovered && !!subCatgories
                  ? "opacity-100 block z-10"
                  : "opacity-0 hidden"
              } absolute z-10 -right-48 top-0 min-w-[200px] max-h-[100%] bg-blue-gray-50 p-4 rounded-md dark:bg-gray-900 dark:text-gray-200 ${
                subCatgories &&
                subCatgories.length > 0 &&
                subCatgories.every(
                  (subcategory) =>
                    typeof subcategory === "object" &&
                    subcategory !== null &&
                    "name" in subcategory
                )
                  ? "-right-[29rem] top-10 text-start flex flex-col flex-wrap items-start" // Show the container
                  : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered &&
                subCatgories &&
                subCatgories.length > 0 &&
                subCatgories.map((subcategory, index) => {
                  if (typeof subcategory === "string") {
                    return (
                      <div key={index} className="mb-1">
                        <Link
                          to={`category/${subcategory}`}
                          className="font-medium hover:text-blue-500 hover:scale-150 transition-all duration-200"
                        >
                          {subcategory}
                        </Link>
                      </div>
                    );
                  } else if (
                    typeof subcategory === "object" &&
                    subcategory !== null &&
                    "name" in subcategory
                  ) {
                    return (
                      <div key={index} className="m-3">
                        <span className="">
                          <p className="font-semibold mb-2 text-blue-700 dark:text-gray-50">
                            {subcategory.name}
                          </p>
                          <ul className="list-none">
                            {subcategory.items.map((item, index) => (
                              <div key={index}>
                                <Link
                                  to=""
                                  className="font-medium hover:text-blue-500 hover:scale-150 transition-all duration-200"
                                >
                                  {item}
                                </Link>
                              </div>
                            ))}
                          </ul>
                        </span>
                      </div>
                    );
                  }
                  return null; // Return null for unsupported types
                })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
