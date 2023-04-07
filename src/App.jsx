import React from "react";
import CarouselType from "./components/CarouselType/CarouselType.jsx";
import Cover from "./components/Cover/Cover.jsx";
import Cover2 from "./components/Cover/Cover2.jsx";
import EquilineMustHave from "./components/EquilineMustHave/EquilineMustHave.jsx";
import Header from "./components/Header/Header.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    // gestire l'errore come desiderato
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // visualizzare un messaggio di errore personalizzato
      return <h1>Oops! Qualcosa è andato storto.</h1>;
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <div className="relative">
        <Header />
        <Cover />
        <CarouselType />
        <EquilineMustHave />
        <Cover2 />
      </div>
    </ErrorBoundary>
  );
};

// const App = () => {
//   return (
//     <div className="relative">
//       <Header />
//       <Cover />
//       <CarouselType />
//       <EquilineMustHave />
//       <Cover2 />
//     </div>
//   );
// };

export default App;
