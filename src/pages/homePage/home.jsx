import React from "react";

import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
// import Slider from "../../components/slider/Slider"; 

export default function home() {
  return (
    <div className="home-page">
      
      <div className="navBar">
        <NavBar/>
      </div>
      
      {/* <div className="slider-container">
        <Slider/>
      </div> */}

           <div className="footer">
            <Footer />
           </div>
    </div>
  );
}
