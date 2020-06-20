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

      <div className="protfolio-text">
        {/* need a learn more button here */}
        <h3>Want to See out Work?</h3>
        <p>
          We don't expect you to take our word for how well we do our jobs
          becuase anyone can write some html. So see for yourself! You can find
          come of our previous projects that we've done for clients by visiting
          their sites or, clicking the learn more button!
        </p>
        <a className="JTSD-link" href="journeyToSoftwareDevelopment.com">
          Journey to Software Development
        </a>
        {/* details button here  */}
        <p></p>
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
