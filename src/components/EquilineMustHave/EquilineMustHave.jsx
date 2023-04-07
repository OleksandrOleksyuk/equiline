import { useState } from "react";
import { mustHave } from "../../constants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import chevronLeft from "../../assets/svg/arrow-long-left.svg";
import chevronRight from "../../assets/svg/arrow-long-right.svg";
import "swiper/swiper.min.css";

const EquilineMustHave = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <h1 className="text-center font-semibold text-4xl uppercase pt-20">
        Equiline must have
      </h1>
      <div
        id="mustHave"
        className="swiper-container p-5 w-full max-w-screen-2xl mx-auto relative"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="swiper-wrapper">
            {mustHave.map((c, i) => (
              <SwiperSlide key={i}>
                <Card
                  id={c["id"]}
                  img={c["img"]}
                  title={c["title"]}
                  price={c["price"]}
                />
              </SwiperSlide>
            ))}
          </div>
          <Button curInd={currentIndex} setInd={setCurrentIndex} />
        </Swiper>
      </div>
    </>
  );
};

const Card = ({ id, img, title, price }) => {
  return (
    <div id={id} className="w-64 lg:w-96">
      <div className="overflow-hidden">
        <img className="object-cover hover:scale-125" src={img} />
      </div>
      <h3 className="text-sm lg:text-base uppercase my-2">{title}</h3>
      <p className="">€ {price}.00</p>
    </div>
  );
};

const Button = ({ curInd, setInd }) => {
  const swiper = useSwiper();
  console.log(curInd, mustHave.length);
  return (
    <>
      <div
        className={`cursor-pointer absolute right-2 md:right-10 top-1/2 translate-y-1/2 bg-white shadow-lg z-20 w-14 h-14 flex justify-center items-center ${
          curInd === mustHave.length - 1 ? "hidden" : ""
        }`}
        onClick={() => {
          swiper.slideNext();
          setInd(() => curInd + 1);
        }}
      >
        <img src={chevronRight} className="w-6 h-6" />
      </div>
      <div
        className={`cursor-pointer absolute left-2 md:left-10 top-1/2 translate-y-1/2 bg-white shadow-lg z-20 w-14 h-14 flex justify-center items-center ${
          curInd === 0 ? "hidden" : " "
        }`}
        onClick={() => {
          swiper.slidePrev();
          setInd(() => curInd - 1);
        }}
      >
        <img src={chevronLeft} className="w-6 h-6" />
      </div>
    </>
  );
};
export default EquilineMustHave;
