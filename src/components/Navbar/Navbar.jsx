import logo from "../../assets/equiline-logo-white.svg";
import hamburgher from "../../assets/svg/hamburgher.svg";
import { arrIcon, arrDrop, arrDrop2 } from "../../constants";
import { useState } from "react";

const Navbar = ({ openNav, setOpenNav }) => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="uppercase py-3 text-center text-sm bg-white">
        SPEDIZIONE GRATUITA SOPRA AI 400€. RESO GRATUITO.
      </div>
      <div className="py-5 flex items-center w-11/12 lg:w-10/12 mx-auto">
        <div className="uppercase md:flex gap-3 lg:gap-8 text-xs lg:text-base w-2/5 text-white hidden">
          <p className="cursor-pointer">IT</p>
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
    </div>
  );
};
export default Navbar;
