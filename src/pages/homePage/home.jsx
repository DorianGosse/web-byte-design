import React from "react";

import "./home.css";
import TextBox from "../../components/textbox/TextBox";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

import { Button } from "../../components/interactable/button/button";

export default function home() {
  return (
    <div className="home-page">
      <NavBar />
      <div className="textbox" id="who-we-are">
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
      <div className="text" id="services-textbox">
        <div className="textbox-header" id="services-header">
          <h3>Our Services Include:</h3>
        </div>
        <p>
          <bold>Landing Pages: </bold>
          <br />
          <br /> For those business owners looking for the perfect online
          business card
        </p>
        <p>
          <bold>Multi-Page Sites: </bold>
          <br />
          <br />
          For those looking to offer their customers the full experience of what
          you have to offer
        </p>
        <p>
          <bold>Interactive and Functional:</bold>
          <br />
          <br />
          We offer dynamic, interactable, functional sites to serve all your
          needs
        </p>
        <p>
          Web Byte Design aims to provide you with a solution to fit your
          business and customer needs when they search for your company online.
          Whether you're a blogger, small business, video maker, or anything in
          between we've got a solution for you!
        </p>
        <div className="buttons">
          <Button>Learn More</Button>
        </div>
      </div>

      <div className="text" id="protfolio-textbox">
        <div className="textbox-header" id="portfolio-header">
          <h3>Want to See out Work?</h3>
        </div>
        <p>
          We don't expect you to take our word for how well we do our jobs
          becuase anyone can write some html. So see for yourself! You can find
          come of our previous projects that we've done for clients by visiting
          their sites or, clicking the learn more button!
        </p>
        <a className="JTSD-link" href="journeyToSoftwareDevelopment.com">
          Journey to Software Development
        </a>
        <div className="buttons">
          <Button>Details</Button>
          <Button>See More Work</Button>
        </div>
      </div>
      <img
        className="services-img"
        src={require("../../assets/office.jpg")}
        alt="services-img"
      />

      <Footer />
    </div>
  );
}
