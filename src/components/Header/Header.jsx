import React, { useEffect, useState } from "react";
import { arrDesktop, arrMobile, btnText } from "../../constants/index.js";
import chevronLeft from "../../assets/svg/chevron-left.svg";
import chevronRight from "../../assets/svg/chevron-right.svg";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Header = () => {
  const getRenderedArray = () =>
    window.innerWidth < 768 ? arrMobile : arrDesktop;
  const [openNav, setOpenNav] = useState(false);
  const [backgroundArray, setBackgroundArray] = useState(getRenderedArray());
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRightArrowClick = (arr) => {
    if (currentIndex == arr.length - 1) setCurrentIndex(0);
    else if (currentIndex < arr.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleLeftArrowClick = (arr) => {
    if (currentIndex === 0) setCurrentIndex(arr.length - 1);
    else if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const img = getRenderedArray();
  useEffect(() => setBackgroundArray(img), []);

  useEffect(() => {
    const updateImg = () => {
      const newImg = getRenderedArray();
      setBackgroundArray(newImg);
    };
    window.addEventListener("resize", updateImg);
    return () => window.removeEventListener("resize", updateImg);
  });

  return (
    <header className="">
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Sidebar openNav={openNav} setOpenNav={setOpenNav} />
      <Background
        backgroundArray={backgroundArray}
        currentIndex={currentIndex}
      />
      <Button
        handleLeftArrowClick={handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
        backgroundArray={backgroundArray}
      />
    </header>
  );
};

const Background = ({ backgroundArray, currentIndex }) => {
  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 1s ease",
  };
  return (
    <div className="flex overflow-hidden w-full">
      {backgroundArray.map((img, i) => (
        <div key={i} className="min-w-full relative" style={slideStyle}>
          <img
            className={`h-[500px] md:min-h-[700px] 2xl:min-h-[900px] object-cover min-w-full`}
            src={img}
          />
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 h-full w-full absolute top-0 left-0 opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 transalte-y-1/2 text-center z-10">
            <h1 className="text-white text-2xl md:text-3xl uppercase mb-4">
              new in: ss23 collection
            </h1>
            <button className="px-4 py-4 md:px-8 md:py-4 text-sm md:text-base bg-white uppercase border-[1px] border-slate-900">
              {btnText[i]}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Button = ({
  handleLeftArrowClick,
  handleRightArrowClick,
  backgroundArray,
}) => {
  return (
    <>
      <div
        className="cursor-pointer absolute right-2 md:right-10 top-1/2 translate-y-1/2"
        onClick={() => handleRightArrowClick(backgroundArray)}
      >
        <img src={chevronRight} className="w-10 h-10" />
      </div>
      <div
        className="cursor-pointer absolute left-2 md:left-10 top-1/2 translate-y-1/2"
        onClick={() => handleLeftArrowClick(backgroundArray)}
      >
        <img src={chevronLeft} className="w-10 h-10" />
      </div>
    </>
  );
};

export default Header;
