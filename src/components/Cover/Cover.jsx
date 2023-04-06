import React from "react";
import imgCover from "../../assets/sbl_cover.webp";

const Cover = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-2xl mx-auto ">
      <div className="py-14 p-5 lg:w-1/2 flex flex-col justify-center items-start space-y-3">
        <h3 className="uppercase text-xl">
          perfette da sole, straordinarie insieme
        </h3>
        <h2 className="uppercase text-2xl lg:text-4xl font-semibold">
          Cover x-cel
        </h2>
        <p className="text-sm md:text-base">
          Scopri le nuove cover X-CEL e aggiungi il tuo tocco distintivo.
          Realizzate in ABS di alta qualità, con inserto glitter o in silicone.
          Disponibili sia per jumping che per dressage.
        </p>
        <button className="px-4 py-4 md:px-8 md:py-4 text-sm md:text-base bg-[#938582] uppercase border-[1px] border-[#938582] text-white hover:bg-white hover:text-[#938582]">
          contemporary donna
        </button>
      </div>
      <div className="lg:py-14 lg:p-5 lg:w-1/2">
        <img src={imgCover} />
      </div>
    </div>
  );
};

export default Cover;
