import React from "react";

import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/carousel/Carousel";

export default function home() {
  return (
    <div className="home-page">
      <div className="navBar">
        <NavBar />
      </div>

      <div className="slider-container">
        <Slider />
      </div>

      <div id="home-tag-line">
        <div id="tagline-container">
          <p>Where professionals come </p>{" "}
          <p id="tagline-underline">for custom web solutions</p>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
