import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import images from "@src/common/Images";

interface SliderProps {
  onPressCarousel?: () => void;
}

// ==== Images ======

const SlidesData = [
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

export default function HomeCarousel(props: SliderProps) {
  const { onPressCarousel } = props;

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      const Swiper = SwiperModule.default;

      new Swiper(".myslider", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="">
        <div className="container mx-auto rounded-md overflow-hidden">
          <div className="wrapper">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="myslider"
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {SlidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="item relative">
                    <div className="image object-contain min-h-16 max-h-[440px]">
                      <img
                        src={slide?.image}
                        alt={"Image" + index}
                        className="w-auto h-auto object-contain"
                      />
                    </div>
                    <div className="absolute top-0 !bottom-0 left-16 items-start flex flex-col align-middle justify-center">
                      <p className="text-sm font-thin text-white bg-black p-2 rounded-md">
                        {slide.category}
                      </p>
                      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl font-medium mb-4 text-[#7c899a] bg-transparent mt-5">
                        <span>{slide.title}</span>
                      </h2>
                      <p className="lg:text-5xl md:text-5xl sm:text-2xl font-bold mb-4 text-[#453c5c] uppercase">
                        {slide.subTitle}
                      </p>
                      <Link
                        // href="#"
                        to=""
                        className="bg-orange-700 rounded-3xl hover:bg-blue-600 text-white px-6 py-3 inline-block mt-3"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
