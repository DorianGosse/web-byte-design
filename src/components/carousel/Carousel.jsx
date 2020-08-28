import React, { Component } from "react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Slider from "react-slick";

import AboutImg from "../../assets/carousel/About.png";
import ServicesImg from "../../assets/carousel/services.png";
import ContactImg from "../../assets/carousel/notebook.png";
import OurWorkImg from "../../assets/carousel/ourwork.png";

const photos = [
  {
    name: "services",
    title: "Our Services",
    linksTo: "/services",
    source: ServicesImg,
  },
  {
    name: "contact",
    title: "Contact Us",
    linksTo: "contact",
    source: ContactImg,
  },
  {
    name: "pricing",
    title: "Pricing",
    linksTo: "/pricing",
    source: AboutImg,
  },
  {
    name: "portfolio",
    title: "What We've Done",
    linksTo: "/portfolio",
    source: OurWorkImg,
  },
];

export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinate: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      className: "slides",
      pauseOnHover: false,
    };
    return (
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className="slider-wrapper">
              <a href={photo.linksTo}>
                <img width="100%" src={photo.source} />
              </a>
            </div>
          );
        })}
      </Slider>
    );
  }
}
