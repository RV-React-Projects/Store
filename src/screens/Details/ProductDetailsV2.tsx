import images from "@src/common/Images";
import { CSSProperties, memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import {
  FreeMode,
  Mousewheel,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import map from "lodash/map";
import capitalize from "lodash/capitalize";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import ProductCategories from "@src/screen_components/Home/ProductCategories";

const slides = [
  images.menu_bg1,
  images.menu_bg2,
  images.menu_bg3,
  images.menu_bg4,
  images.menu_bg5,
];

type ThumbsConfig = {
  swiper?: SwiperInstance | null;
};

type SwiperInstance = SwiperClass & {
  thumbs?: ThumbsConfig;
};

function ProductDetails(props: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const breadcrumbData = [
    { name: "Category", path: "/category" },
    { name: capitalize(props?.catType), path: `/category/:${props?.catType}` },
  ];

  return (
    <div className="dark:bg-gray-900  min-h-screen">
      <div className="padding_div">
        <BreadCrumb data={breadcrumbData} />
        <div className="flex flex-col md:flex-row md:gap-8 md:py-5">
          <div className="md:w-full min-w-[55%] select-none sticky top-0">
            <Swiper
              className="mySwiper2 rounded-md"
              style={
                {
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                } as CSSProperties
              }
              autoplay
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={
                thumbsSwiper
                  ? ({ swiper: thumbsSwiper } as ThumbsConfig)
                  : undefined
              }
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {map(slides, (item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} className="h-full w-full !object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper max-h-[150px] lg:max-h-[200px] mt-3 !min-h-[150px] overflow-hidden"
            >
              {map(slides, (item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    className="h-full w-full !object-cover rounded-md bg-transparent "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* =========== Right Side ============ */}
          <div className="flex flex-col p-1 gap-3 md:w-full md:max-w-[600px]">
            <div>
              {/* Subtitle */}
              <h2
                className="uppercase text-orange mb-3 font-bold tracking-[0.13em] text-xs 
        md:text-base"
              >
                Sneaker Company
              </h2>
              {/* Product Name */}
              <h1 className="font-bold text-3xl mb-4 md:text-5xl md:mb-10">
                Fall Limited Edition Sneakers
              </h1>
              {/* Product Description */}
              <p className="text-dark-grayish-blue mb-5 text-sm leading-[22px] md:text-base">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              {/* Product Price */}
              <div className="flex items-center justify-between md:flex-col md:items-start mt-2">
                <div className="flex gap-4 items-center">
                  {/* Price */}
                  <span className="font-bold text-2xl">$125.00</span>
                  {/* Discount */}
                  <span className="bg-pale-orange text-orange font-bold text-sm px-2 rounded-md">
                    50%
                  </span>
                </div>
                {/* Previous price */}
                <span className="text-grayish-blue text-sm font-bold">
                  <del>$250.00</del>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
              {/* Amount required */}
              <div
                className="flex w-full bg-light-grayish-blue justify-between items-center px-6 py-2 rounded-xl mt-2
        md:w-1/3 md:px-3 md:mt-0"
              >
                {/* Minus button */}
                <div>
                  <button
                    // onClick={() => setProductCounter(removeProduct)}
                    className="font-bold text-orange text-2xl pb-1"
                  >
                    -
                  </button>
                </div>

                {/* Quantity */}
                <div className="font-bold">10</div>

                {/* Plus button */}
                <div>
                  <button
                    // onClick={() => setProductCounter(addProduct)}
                    className="font-bold text-orange text-2xl w-[1rem] pb-1"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart Button */}
              <button
                // onClick={addToCard}
                className="w-full bg-orange text-white py-4 rounded-xl font-bold 
          shadow-[0_10px_30px_-12px] shadow-orange md:w-2/3"
              >
                <div className="flex gap-4 justify-center">
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="currentColor"
                      fillRule="nonzero"
                    />
                  </svg>
                  Add to cart
                </div>
              </button>
            </div>
          </div>
        </div>
        <ProductCategories />
      </div>
    </div>
  );
}

export default memo(ProductDetails);
