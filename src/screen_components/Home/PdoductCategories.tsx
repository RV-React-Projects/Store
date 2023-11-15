import { DataProductCategories } from "@src/helpers/DataProductCategories";
import { map } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

function PdoductCategories() {
  return (
    <div className="padding_div group">
      <div className="grid grid-cols-3 gap-2 p-2 overflow-hidden">
        {map(DataProductCategories, (item, index) => (
          <div
            key={index}
            className="flex border border-gray-400 dark:border-gray-100 rounded-md"
          >
            <img
              className="h-fit max-w-[160px] object-cover m-1"
              src={item?.imageSrc}
            />
            <div className="ml-4 flex flex-col justify-around">
              <p className="text-lg font-medium dark:text-gray-200  ">
                {item?.category}
              </p>
              <div className="flex flex-col text-blue-gray-600 transition-all duration-300 gap-1">
                {map(item?.subcategories, (subcategory, index) => (
                  <Link
                    to=""
                    key={index}
                    className="dark:text-gray-400 hover:text-primary dark:hover:text-gray-200 transition-all duration-300 "
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
              <Link
                to={item?.viewAllLink}
                className="dark:text-gray-50 dark:hover:text-blue-600 hover:text-blue-600"
              >
                View All
                <i className="ri-arrow-right-line ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PdoductCategories;
