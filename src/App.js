import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
