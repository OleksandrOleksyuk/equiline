import React from "react";
import imgCover from "../../assets/sbl_cover.webp";
import { cover1 } from "../../constants";

const Cover = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-2xl mx-auto ">
      <div className="py-14 p-5 lg:w-1/2 flex flex-col justify-center items-start space-y-3">
        <h3 className="uppercase text-xl">{cover1["h3"]}</h3>
        <h2 className="uppercase text-2xl lg:text-4xl font-semibold">
          {cover1["h2"]}
        </h2>
        <p className="text-sm md:text-base">{cover1["p"]}</p>
        <button className="px-4 py-4 md:px-8 md:py-4 text-sm md:text-base bg-[#938582] uppercase border-[1px] border-[#938582] text-white hover:bg-white hover:text-[#938582]">
          {cover1["bnt"]}
        </button>
      </div>
      <div className="lg:py-14 lg:p-5 lg:w-1/2">
        <img src={imgCover} />
      </div>
    </div>
  );
};

export default Cover;
