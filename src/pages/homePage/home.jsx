import React from "react";

import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/carousel/Carousel"; 

export default function home() {
  return (
    <div className="home-page">
      
      <div className="navBar">
        <NavBar/>
      </div>
      
      <div className="slider-container">
        <Slider/>
      </div>

      <div id="home-tag-line">
        <p>Where professionals come <br/>for custom web solutions</p>
      </div>  

       <div className="footer">
         <Footer />    
       </div>
    </div>
  );
}
