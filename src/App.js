import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import TextBox from "./components/textbox/TextBox";

import Home from "./pages/homePage/home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Error from "./pages/error/Error";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />

        <Route component={Error} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
