import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

import Home from "./pages/homePage/home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
