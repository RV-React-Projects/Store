import { memo } from "react";
import { Link } from "react-router-dom";
import Carousel from "@material-tailwind/react/components/Carousel";

import images from "@src/common/Images";
import _ from "lodash";

interface SliderProps {
  onPressCarousel?: () => void;
}

export const SlidesData = [
  {
    image: images.slider0,
    category: "Shoes Fashion",
    title: "Come and Get it!",
    subTitle: "Brand New Shoes",
  },
  {
    image: images.slider1,
    category: "Quick Fashion",
    title: "Fit Your Wardrobe",
    subTitle: "Brand New Shoes",
  },
  {
    image: images.slider2,
    category: "Quick Offer",
    title: "Wooden Minimal Sofa",
    subTitle: "Brand New Shoes",
  },
  {
    image: images.slider3,
    category: "Best Deals",
    title: "Home Workout Accessories",
    subTitle: "Brand New Shoes",
  },
];

function HomeCarouselV2(props: SliderProps) {
  const { onPressCarousel } = props;

  return (
    <div className="mx-auto rounded-md overflow-hidden w-full">
      <Carousel
        className="w-full h-[450px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
            {_.times(SlidesData?.length, (i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay
        loop
        autoplayDelay={6000}
      >
        {SlidesData.map((slide, index) => (
          <div className="relative" key={index}>
            <img
              src={slide?.image}
              alt={"Image" + index}
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute  bottom-20 left-20 items-start flex flex-col align-middle justify-center p-4 text-white">
              <p className="text-sm font-thin p-2 bg-black rounded-md">
                {slide.category}
              </p>
              <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-light my-3 text-[#7c899a]">
                <span>{slide.title}</span>
              </h2>
              <p className="lg:text-5xl md:text-5xl sm:text-2xl font-bold my-2 uppercase text-[#453c5c]">
                {slide.subTitle}
              </p>
              <Link
                to=""
                className="bg-orange-700 rounded-3xl hover:bg-blue-600 text-white px-6 py-3 inline-block mt-2"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default memo(HomeCarouselV2);
