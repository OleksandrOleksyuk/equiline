import React from "react";
import { carouselTypeObj } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const CarouselType = () => {
  return (
    <div
      id="carouselType"
      className="swiper-container p-5 w-full max-w-screen-2xl mx-auto 2xl:flex"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-wrapper">
          {carouselTypeObj.map((c) => (
            <SwiperSlide key={c["id"]}>
              <CardCarousel
                src={c["img"]}
                title={c["title"]}
                text={c["text"]}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

const CardCarousel = ({ src, title, text }) => {
  return (
    <div className="relative w-72 md:w-[350px] h-full">
      <img className="h-full object-cover" src={src} />
      <div
        className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 opacity-70 h-[60%]
        absolute bottom-0 left-0"
      ></div>
      <div className="w-full h-[60%] absolute bottom-0 left-0 z-10 p-5 text-white space-y-3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl uppercase ">{title}</h3>
          <p className="text-xs md:text-sm">{text}</p>
        </div>
        <button className="px-4 py-4 md:px-8 md:py-4 text-sm md:text-base bg-white uppercase border-[1px] border-slate-900 text-slate-900 w-32">
          scopri
        </button>
      </div>
    </div>
  );
};

export default CarouselType;
