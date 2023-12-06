import { DataProductCategories } from "@src/helpers/DataProductCategories";
import map from "lodash/map";
import { Link } from "react-router-dom";

function ProductCategories() {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="padding_div group">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 overflow-hidden mb-5">
        {map(DataProductCategories, (item, index) => (
          <div
            key={index}
            className="flex border border-gray-400 dark:border-gray-600 rounded-md"
          >
            <img
              className="h-fit max-w-[160px] object-cover m-1 bg-blend-darken"
              src={item?.imageSrc}
            />
            <div className="ml-4 flex flex-col justify-around">
              <p className="text-lg font-medium dark:text-gray-200  ">
                {item?.category}
              </p>
              <div className="flex flex-col text-blue-gray-600 transition-all duration-300 gap-1">
                {map(item?.subcategories, (subcategory, index) => (
                  <Link
                    to={`/category/${subcategory}`}
                    onClick={scrolltoTop}
                    key={index}
                    className="dark:text-gray-400 hover:text-primary dark:hover:text-gray-100 transition-all duration-300 "
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
              <Link
                to={item?.viewAllLink}
                className="dark:text-gray-50 dark:hover:text-white hover:text-blue-600 transition-all duration-300"
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

export default ProductCategories;
