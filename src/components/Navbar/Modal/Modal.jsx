import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Modal = ({ setCountrySelected, openModal, setOpenModal, country }) => {
  return (
    <div className={`overflow-hidden ${openModal ? "md:block" : "hidden"}`}>
      <div
        className="absolute top-0 left-0 bg-gray-500 opacity-40 z-30 flex justify-center items-center w-screen h-screen"
        onClick={() => setOpenModal(!openModal)}
      ></div>
      <div className="absolute top-1/2 left-1/2 w-96 -translate-x-1/2 translate-y-1/2 h-96 bg-slate-50 z-30 p-5 flex flex-col items-start justify-between">
        <div>
          <h1 className="text-base font-light uppercase ">
            Seleziona il tuo paese
          </h1>
          <p className="text-sm font-light">Selezione corrente</p>
        </div>
        <div className="p-5 swiper-container h-64 border-t-2 border-cyan-300  overflow-auto">
          <Swiper
            spaceBetween={0}
            slidesPerView={"auto"}
            direction={"vertical"}
            navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="swiper-wrapper">
              {country.map((country, i) => (
                <SwiperSlide key={i}>
                  <div
                    className="h-8 flex my-1 items-center gap-3"
                    onClick={() => {
                      setOpenModal(!openModal);
                      setCountrySelected(country);
                    }}
                  >
                    <div className="h-8 w-14">
                      <img
                        className="h-8 w-14 object-cover"
                        src={country.flags.png}
                      />
                    </div>
                    <div>
                      <p className="cursor-pointer hover:underline hover:underline-offset-1">
                        {country.name.common}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Modal;
