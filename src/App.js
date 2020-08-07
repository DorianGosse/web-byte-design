import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./app.css";

import Home from "./pages/homePage/home";
import Error from "./pages/error/Error";
import Contact from "./pages/contact/Contact";
import Pricing from './pages/pricing/Pricing'; 

import AboutUs from "./pages/about/aboutUs/AboutUs";
import OurTeam from "./pages/about/ourTeam/OurTeam"; 
import Services from "./pages/about/services/Services"; 

// DONT FORGET TO REMOTE THIS IMPORT
import Test from "./pages/testpage/TestPage"



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/pricing" component={Pricing}/> 
        <Route exact path="/services" component={Services}/>
        <Route exact path="/our-team" component={OurTeam}/> 
       
      {/* DONT FORGET TO REMOVE THIS ROUTE */}
       <Route exact path ="/test-page" component ={Test}/> 
       
        <Route component={Error} />
      </Switch>

    </>
  );
}

export default App;
