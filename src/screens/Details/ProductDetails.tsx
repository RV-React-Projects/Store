import images from "@src/common/Images";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import ProductCategories from "@src/screen_components/Home/ProductCategories";
import "react-image-gallery/styles/scss/image-gallery.scss";
import apparel1 from "@assets/products/apparel1.jpg";
import apparel2 from "@assets/products/apparel2.jpg";
import apparel3 from "@assets/products/apparel3.jpg";
import apparel4 from "@assets/products/apparel4.jpg";
import apparel5 from "@assets/products/apparel5.jpg";
import apparel6 from "@assets/products/apparel6.jpg";
import { capitalize, times } from "lodash";
import BreadCrumb from "@src/components/BreadrCrumbs/BreadCrumb";
import SearchBar from "@src/screen_components/Home/SearchBar";
import CountdownTimer from "@src/screen_components/Common/CountdownTimer";
import { NumberInput } from "keep-react";
import Button from "@material-tailwind/react/components/Button";
import { useAppSelector } from "@src/redux/store";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react/components/Accordion";
import FeaturedProduct from "@src/screen_components/Home/FeaturedProduct";

const SlideImages = [
  {
    original: apparel1,
    thumbnail: apparel1,
  },
  {
    original: apparel2,
    thumbnail: apparel2,
  },
  {
    original: apparel3,
    thumbnail: apparel3,
  },
  {
    original: apparel4,
    thumbnail: apparel4,
  },
  {
    original: apparel5,
    thumbnail: apparel5,
  },
  {
    original: apparel6,
    thumbnail: apparel6,
  },
];

const productDetails = {
  name: "Happy Sailed Womens Summer Boho Floral",
  rating: 4,
  review: "2,251",
  InStock: true,
  variation: [32, 34, 54, 34, 42],
  colors: ["red", "green", "yellow", "blue", "purple", "orange", "indigo"],
  price: 80.9,
  oldPrice: 119.9,
  off: 32,
  onOffer: true,
  offer_sold: 3459,
  totalOfferItem: 4000,
  offerEndsBY: new Date(),
  brand: "Nike",
  activity: "Running",
  materal: "Fleece",
  gender: "Men",
  details:
    "Get that speed you need, just like Russ. Inspired by Russell Westbrook's latest signature shoe, the outsole of the Jordan One Take 4 wraps up nearly to the midsole so you can start, stop or change direction in an instant. /n Meanwhile, energy-returning Zoom Air cushioning in the forefoot keeps you going (and going and going)",
  reviews: [
    {
      by: "Sarah",
      on: "7/7/22",
      rating: 5,
      heading: "AWESOME PRODUCT!",
      description: "5 out of 5 from my side",
    },
    {
      by: "Sarah",
      on: "7/7/22",
      rating: 5,
      heading: "AWESOME PRODUCT!",
      description: "5 out of 5 from my side",
    },
    {
      by: "Sarah",
      on: "7/7/22",
      rating: 5,
      heading: "AWESOME PRODUCT!",
      description: "5 out of 5 from my side",
    },
    {
      by: "Sarah",
      on: "7/7/22",
      rating: 5,
      heading: "AWESOME PRODUCT!",
      description: "5 out of 5 from my side",
    },
    {
      by: "Sarah",
      on: "7/7/22",
      rating: 5,
      heading: "AWESOME PRODUCT!",
      description: "5 out of 5 from my side",
    },
  ],
};

interface AccordianIconPropsTypes {
  id?: number;
  open?: number;
}

function AccordianIcon(props: AccordianIconPropsTypes) {
  const { id, open } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ProductDetails(props: any) {
  const { alreadyInCart = false } = props || {};
  const { id = null } = useParams();
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [itemCount, setItemCount] = useState<number>(0);
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const onPressSearch = () => {};

  const onRemoveFromCart = (id: string) => {};
  const onAddToCart = (id: string) => {};

  const breadcrumbData = [
    { name: "Product", path: "/product" },
    // { name: capitalize(props?.catType), path: `/category/:${props?.catType}` },
  ];

  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  // const getContrastTextClass = (backgroundColor: string) => {
  //   const hexColor = `#${backgroundColor}`;
  //   const rgb = parseInt(hexColor.replace(/^#/, ""), 16);
  //   const brightness =
  //     ((rgb >> 16) * 0.299 +
  //       ((rgb >> 8) & 0.7) * 0.587 +
  //       (rgb & 0.114) * 0.114) /
  //     255;

  //   return brightness > 0.5 ? "text-gray-800" : "text-white";
  // };

  const getContrastTextClass = (colorName: string) => {
    const lightColors = [
      // "yellow",
      "amber",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "light-blue",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "red",
    ];
    const isLightColor = lightColors.includes(colorName);
    return isLightColor ? "text-white" : "text-gray-800";
  };

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <div className="dark:bg-gray-900  min-h-screen">
      <SearchBar
        value={searchText}
        onChangeText={(val) => setSearchText(val)}
        onPressSearch={onPressSearch}
      />
      <div className="padding_div">
        <BreadCrumb data={breadcrumbData} />
        <div className="flex md:flex-row flex-col items-center flex-1 justify-between md:gap-6 md:py-5 lg:gap-8">
          {/* Left Section */}
          <div className="flex-1 overflow-y-auto self-start lg:flex md:sticky top-10 w-full select-none">
            <ImageGallery
              startIndex={0}
              autoPlay={false}
              items={SlideImages}
              showBullets
              showPlayButton={false}
              infinite={true}
              showThumbnails
              thumbnailPosition="bottom"
              slideOnThumbnailOver
              useTranslate3D
              showNav
              additionalClass="customc-gallery-slide"
            />
            <div className="absolute top-3 right-3">
              <p className=" flex p-4 rounded-full text-white bg-black h-16 w-16 text-center items-center justify-center font-bold">
                {productDetails?.off}% Off
              </p>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-1 gap-3 md:w-full md:max-w-[600px] overflow-y-auto">
              <div className="flex flex-col ">
                <p className="dark:text-gray-200 font-semibold lg:text-4xl text-2xl line-clamp-2 lg:h-24 h-16">
                  {productDetails?.name}
                </p>
                <div>
                  <div className="flex flex-row lg:mt-2">
                    {times(5, (index) => (
                      <svg
                        key={index}
                        className={`w-5 h-5 fill-current ${
                          productDetails?.rating > index
                            ? "text-primary dark:text-gray-500"
                            : "text-gray-500 dark:text-gray-700"
                        }  `}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                    <p className="ml-2 text-gray-400 ">
                      {productDetails?.review} reviews
                    </p>
                  </div>
                  <div className="flex mt-3">
                    {productDetails?.InStock && (
                      <p className="p-1 px-2 text-green-400 bg-gray-200 dark:bg-gray-600 rounded-md text-sm font-medium">
                        In Stock
                      </p>
                    )}
                  </div>
                  {/* ======== ON Offer Section =========== */}
                  {productDetails?.onOffer && (
                    <div className="mb-5 flex flex-col self-center items-center my-10">
                      <p className="text-center font-medium text-xl mb-5 dark:text-gray-200">
                        OFFER ENDS IN
                      </p>
                      <CountdownTimer />
                      <div className="flex items-center justify-between w-full dark:text-gray-400 mt-5">
                        <p className="font-medium">Sold: 3,459</p>
                        <p className="font-medium">Stock: 107</p>
                      </div>
                      <progress
                        className="progress progress-primary w-full my-4"
                        value="70"
                        max="100"
                      />
                    </div>
                  )}
                  <div>
                    <p className="mb-2 text-lg font-medium dark:text-gray-300">
                      Sizes :
                    </p>
                    <div className="flex w-full flex-wrap gap-2">
                      {productDetails?.variation.map((prodsize, index) => (
                        <p
                          key={index}
                          className={`px-4 p-3 border rounded-md dark:text-gray-400 font-bold text-lg cursor-pointer ${
                            prodsize === selectedSize
                              ? "border-2 border-primary"
                              : "border-2 border-gray-100 dark:border-gray-800"
                          } select-none`}
                          onClick={() => setSelectedSize(prodsize)}
                        >
                          {prodsize}
                        </p>
                      ))}
                    </div>
                    <p className="mb-2 text-lg font-medium dark:text-gray-300 mt-6">
                      Color :
                    </p>
                    <div className="flex w-full flex-wrap gap-2">
                      {productDetails?.colors.map((color, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 p-3 border rounded-lg font-bold text-lg min-w-[100px] text-center select-none flex flex-row items-center ${
                            selectedColor === color
                              ? "border-2 border-primary"
                              : "border-2 border-gray-100 dark:border-gray-800"
                          }`}
                        >
                          <div
                            className={`h-5 w-5 rounded-full mr-2 `}
                            style={{ backgroundColor: `${color}` }}
                          />
                          <p
                            className="dark:text-gray-200 font-medium text-lg capitalize"
                            key={index}
                          >
                            {color}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex flex-row items-center justify-between my-10 gap-3">
                      <NumberInput
                        style={{
                          backgroundColor: "transparent",
                          // width: "100%",
                          minWidth: 150,
                          borderWidth: 1,
                          color: isDarkMode ? "#FFFFFF" : "#000",
                          padding: 15,
                        }}
                        sizing="lg"
                        value={itemCount}
                        setValue={setItemCount}
                        min={0}
                      />
                      <div className="w-full shadow-[0_10px_30px_-12px] shadow-orange rounded-lg">
                        {alreadyInCart ? (
                          <Button
                            variant="gradient"
                            size="lg"
                            color="red"
                            className="capitalize w-full h-[50px]"
                            onClick={() => id && onRemoveFromCart(id)}
                          >
                            Remove from Cart
                          </Button>
                        ) : (
                          <Button
                            variant="gradient"
                            size="lg"
                            className="capitalize w-full h-[50px]"
                            onClick={() => {
                              id && onAddToCart(id);
                              setItemCount(itemCount + 1);
                            }}
                          >
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="mt-10">
                        <Accordion
                          open={open === 1}
                          icon={<AccordianIcon id={1} open={open} />}
                          animate={CUSTOM_ANIMATION}
                        >
                          <AccordionHeader
                            className="dark:text-gray-200 pr-2 uppercase"
                            onClick={() => handleOpen(1)}
                          >
                            INFORMATION
                          </AccordionHeader>
                          <AccordionBody className="p-5">
                            <div className="flex flex-row items-center mb-2">
                              <p className="min-w-[120px] font-bold text-sm dark:text-white text-black uppercase">
                                BRANDS
                              </p>
                              <p className="font-normal dark:text-gray-300 text-gray-800">
                                {productDetails?.brand}
                              </p>
                            </div>
                            <div className="flex flex-row items-center mb-2">
                              <p className="min-w-[120px] font-bold text-sm dark:text-white text-black uppercase">
                                ACTIVITY
                              </p>
                              <p className="font-normal dark:text-gray-300 text-gray-800">
                                {productDetails?.activity}
                              </p>
                            </div>
                            <div className="flex flex-row items-center mb-2">
                              <p className="min-w-[120px] font-bold text-sm dark:text-white text-black uppercase">
                                MATERIAL
                              </p>
                              <p className="font-normal dark:text-gray-300 text-gray-800">
                                {productDetails?.materal}
                              </p>
                            </div>
                            <div className="flex flex-row items-center mb-2">
                              <p className="min-w-[120px] font-bold text-sm dark:text-white text-black uppercase">
                                GENDER
                              </p>
                              <p className="font-normal dark:text-gray-300 text-gray-800">
                                {productDetails?.gender}
                              </p>
                            </div>
                          </AccordionBody>
                        </Accordion>
                        <Accordion
                          open={open === 2}
                          icon={<AccordianIcon id={2} open={open} />}
                          animate={CUSTOM_ANIMATION}
                        >
                          <AccordionHeader
                            className="dark:text-gray-200 pr-2 uppercase"
                            onClick={() => handleOpen(2)}
                          >
                            DETAILS
                          </AccordionHeader>
                          <AccordionBody className="p-5">
                            <p className="text-justify">
                              {productDetails?.details}
                            </p>
                          </AccordionBody>
                        </Accordion>
                        <Accordion
                          open={open === 3}
                          icon={<AccordianIcon id={3} open={open} />}
                          animate={CUSTOM_ANIMATION}
                        >
                          <AccordionHeader
                            className="dark:text-gray-200  pr-2"
                            onClick={() => handleOpen(3)}
                          >
                            REVIEWS
                          </AccordionHeader>
                          <AccordionBody>
                            <div className="p-5">
                              {productDetails?.reviews.map((review, index) => (
                                <div
                                  key={index}
                                  className={`${
                                    productDetails?.reviews?.length - 1 > index
                                      ? "border-b-[1px]"
                                      : ""
                                  } ${index > 0 ? "mt-5" : ""} `}
                                >
                                  <p className="font-bold text-black dark:text-gray-200 text-lg uppercase">
                                    Revied By {review?.by}
                                  </p>
                                  <p className="text-xs font-light dark:text-gray-400">
                                    On: {review?.on}
                                  </p>
                                  <div className="flex flex-row lg:mt-2">
                                    {times(5, (i) => (
                                      <svg
                                        key={i}
                                        className={`w-5 h-5 fill-current ${
                                          review?.rating > i
                                            ? "text-primary dark:text-gray-500"
                                            : "text-gray-500 dark:text-gray-700"
                                        }  `}
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <p className="uppercase text-xl line-clamp-2 font-bold text-black dark:text-gray-200 mt-3">
                                    {review?.heading}
                                  </p>
                                  <p className="font-light text-base pb-5 dark:text-gray-400">
                                    {review?.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </AccordionBody>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProduct />
      <ProductCategories />
    </div>
  );
}

export default memo(ProductDetails);
