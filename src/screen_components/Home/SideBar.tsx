import _ from "lodash";
import React, { useState } from "react";

const categoriesData = [
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

interface SubcategoryListProps {
  items: string[];
}

const SubcategoryList: React.FC<SubcategoryListProps> = ({ items }) => (
  <ul className="ml-4">
    {items.map((item, index) => (
      <li key={index}>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          {item}
        </a>
      </li>
    ))}
  </ul>
);

interface Subcategory {
  name: string;
  items: string[];
}

interface CategoryItemProps {
  name?: string;
  icon?: string;
  subcategories?: string[];
  categorysubcategories?: string[] | Subcategory[];
}

const CategoryItem = (props: CategoryItemProps) => {
  const { name = "", icon, subcategories, categorysubcategories } = props;
  return (
    <li className={`has-child ${name.toLowerCase()}`}>
      <a href="#">
        <div className="icon-larger">
          <i className={`ri-${icon}`} />
        </div>
        {name}
        {categorysubcategories && categorysubcategories?.length > 0 && (
          <div className="icon-small">
            <i className="ri arrow-right-s-line"></i>
          </div>
        )}
      </a>
      {/* {subcategories && <SubcategoryList items={subcategories[0]?.items} />} */}
    </li>
  );
};

interface SubcategoryItemProps {
  name: string;
}

// interface CategoryItemProps {
//   name: string;
//   icon: string;
//   subcategories?: (string | { name: string; items: string[] })[];
// }

const SubcategoryItem: React.FC<SubcategoryItemProps> = ({ name }) => (
  <li>
    <a href="#">{name}</a>
  </li>
);

export default function SideBar() {
  const [showSubCatgories, setShowSubCatgories] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [itemIndex, setitemIndex] = useState<number | null>(0);

  // console.log("showSubCatgories=", showSubCatgories);
  console.log(
    "showSubCatgories=",
    isHovered,
    itemIndex && categoriesData[Number(itemIndex)]?.subcategories
  );

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
            onMouseLeave={() => {
              setIsHovered(false);
              setitemIndex(null);
            }}
          >
            {_.map(categoriesData, (category, index) => (
              <li
                key={index}
                onMouseEnter={() => {
                  category?.subcategories &&
                    category?.subcategories?.length > 0 &&
                    setIsHovered(true);
                  setitemIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setitemIndex(null);
                }}
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
                <span
                  className={`${
                    isHovered ? "opacity-100 block z-10" : "opacity-0 hidden"
                  } absolute z-10 -right-48 top-0 items-center justify-start text-start min-w-[200px]`}
                >
                  {isHovered &&
                    itemIndex &&
                    categoriesData[itemIndex]?.subcategories?.map(
                      (subcategory, index) =>
                        typeof subcategory === "string" ? (
                          <div key={index} className="bg-gray-300">
                            {subcategory}
                          </div>
                        ) : (
                          <span key={index}>
                            <a href="#" className="font-semibold">
                              {subcategory.name}
                            </a>
                            {subcategory.items && (
                              <ul>
                                {subcategory.items.map((item, itemIndex) => (
                                  <SubcategoryItem
                                    key={itemIndex}
                                    name={item}
                                  />
                                ))}
                              </ul>
                            )}
                          </span>
                        )
                    )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// <div>Heloo</div>
// <CategoryItem
//   key={index}
//   name={category?.name}
//   icon={category?.icon}
//   // subcategories={category?.subcategories}
//   categorysubcategories={category?.subcategories}
// />
