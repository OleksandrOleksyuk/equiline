import React from "react";
import imgCover from "../../assets/equiline_universe.webp";
import { cover2 } from "../../constants";

const Cover = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center max-w-screen-2xl mx-auto">
      <div className="py-14 p-5 lg:w-1/2 md:w-4/12">
        <div className="space-y-3 flex flex-col justify-center items-start lg:w-10/12">
          <h3 className="uppercase text-2xl lg:text-4xl">{cover2["h3"]}</h3>
          <h2 className="uppercase text-base font-light">{cover2["h2"]}</h2>
          <p className="text-xs md:text-sm font-light lg:text-base">
            {cover2["p"]}
          </p>
          <button className="px-4 py-4 md:px-8 md:py-4 text-sm md:text-base bg-[#938582] uppercase border-[1px] border-[#938582] text-white hover:bg-white hover:text-[#938582]">
            {cover2["bnt"]}
          </button>
        </div>
      </div>
      <div className="lg:py-14 lg:w-1/2 md:w-8/12 flex justify-end md:p-5">
        <img src={imgCover} />
      </div>
    </div>
  );
};

export default Cover;
