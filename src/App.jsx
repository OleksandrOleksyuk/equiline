import React from "react";
import CarouselType from "./components/CarouselType/CarouselType.jsx";
import Cover from "./components/Cover/Cover.jsx";
import Cover2 from "./components/Cover/Cover2.jsx";
import EquilineMustHave from "./components/EquilineMustHave/EquilineMustHave.jsx";
import Header from "./components/Header/Header.jsx";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <Cover />
      <CarouselType />
      <EquilineMustHave />
      <Cover2 />
    </div>
  );
};

export default App;
