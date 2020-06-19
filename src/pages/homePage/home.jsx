import React from "react";

import "./home.css";
import TextBox from "../../components/textbox/TextBox";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

export default function home() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="textbox">
        <TextBox />
      </div>
      <img
        className="top-img"
        src={require("../../assets/hometop.jpg")}
        alt="laptop&coffee"
      />
      <div className="header-block">
        <h2>What do we do at WBD?</h2>
        <p>Check out our past work and services</p>
      </div>
      <div className="services-text">
        <div className="services-header">
          <h3>Our Services Include:</h3>
        </div>
        <p>
          <bold>Landing Pages: </bold> For those business owners looking for the
          perfect online business card
        </p>
        <p>
          <bold>Multi-Page Sites: </bold> For those looking to offer their
          customers the full experience of what you have to offer
        </p>
        <p>
          <bold>Interactive and Functional:</bold>We offer dynamic,
          interactable, functional sites to serve all your needs
        </p>
        <p>
          Web Byte Design aims to provide you with a solution to fit your
          business and customer needs when they search for your company online.
          Whether you're a blogger, small business, video maker, or anything in
          between we've got a solution for you!
        </p>
      </div>
      <div className="protfolio-text"></div>
      <img
        className="services-img"
        src={require("../../assets/office.jpg")}
        alt="services-img"
      />

      <Footer />
    </div>
  );
}
