import logo from "../../assets/equiline-logo-white.svg";
import hamburgher from "../../assets/svg/hamburgher.svg";
import { arrIcon, arrDrop, arrDrop2 } from "../../constants";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Navbar = ({ openNav, setOpenNav }) => {
  const [countrySelected, setCountrySelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="uppercase py-3 text-center text-sm bg-white">
        SPEDIZIONE GRATUITA SOPRA AI 400€. RESO GRATUITO.
      </div>
      <div className="py-5 flex items-center w-11/12 lg:w-10/12 mx-auto">
        <div className="uppercase md:flex gap-3 lg:gap-8 text-xs lg:text-base w-2/5 text-white hidden">
          <p
            className="cursor-pointer flex items-center gap-1"
            onClick={() => setOpenModal(!openModal)}
          >
            <img
              className="h-6"
              src={countrySelected && countrySelected.flags.png}
            />
            {countrySelected && countrySelected.cioc}
          </p>
          <p className="hover:underline cursor-pointer">Servizio clienti</p>
          <p className="hover:underline cursor-pointer">store locator</p>
        </div>
        <div className="w-2/5 md:hidden">
          <img
            src={hamburgher}
            alt="Logo Equiline"
            className="h-6 w-6 cursor-pointer"
            onClick={() => setOpenNav(() => !openNav)}
          />
        </div>
        <div className="w-1/5 flex justify-center">
          <img src={logo} alt="Logo Equiline" />
        </div>
        <div className="flex justify-end gap-2 w-2/5">
          {arrIcon.map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt="icon"
              className={`h-6 w-6 cursor-pointer ${
                i == 3 ? "" : "max-md:hidden"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto">
        <ul className="md:flex flex-wrap w-full justify-around text-white hidden relative mb-3">
          {arrDrop.map((drop, i) => (
            <li className="relative" key={i}>
              <a
                href="#"
                className="text-sm xl:text-base uppercase cursor-pointer mx-3 mb-5 hover:underline hover:underline-offset-4"
                onMouseEnter={() => setShowBanner(true)}
                onMouseLeave={() => setShowBanner(false)}
              >
                {drop}
              </a>
              {/* <ul
                className={`absolute top-10 left-1/2 -translate-x-1/2 bg-black w-screen h-screen ${
                  showBanner ? "" : "hidden"
                }`}
              ></ul> */}
            </li>
          ))}
        </ul>
        <ul className="md:flex w-full flex-wrap justify-around text-white hidden relative">
          {arrDrop2.map((drop, i) => (
            <li className="relative" key={i}>
              <a
                href="#"
                className="text-sm xl:text-base uppercase cursor-pointer mx-3 mb-5 hover:underline hover:underline-offset-4"
              >
                {drop}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        setCountrySelected={setCountrySelected}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </div>
  );
};

const Modal = ({ setCountrySelected, openModal, setOpenModal }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountry([...data]);
      country.forEach((c) => {
        if (c.name.common.toLowerCase() === "ukraine") {
          console.log(c);
          setCountrySelected(c);
          // setCountryName(c.cioc);
        }
      });
    };
    fetchData();
  }, []);
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

export default Navbar;
