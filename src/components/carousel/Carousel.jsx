import React, {Component} from "react"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Slider from "react-slick";

import AboutImg from "../../assets/carousel/About.png";
import ServicesImg from "../../assets/carousel/services.png"; 
import ContactImg from "../../assets/carousel/contact.png"
import OurWorkImg from "../../assets/carousel/ourwork.png"; 

const photos = [
    {
        name: "Services", 
        title: "Our Services",
        source: ServicesImg
    }, 
    {
        name: "Contact", 
        title: "Contact Us",
        source: ContactImg
    }, 
    {
        name: "About",
        title: "About Us", 
        source: AboutImg
    }, 
    {
        name: "Our Work", 
        title: "What We've Done", 
        source: OurWorkImg
    }
]
export default class Carousel extends Component {

    render (){
        const settings = {
            dots: true, 
            fade: true, 
            infinate: true, 
            speed: 500, 
            slidesToShow: 1,
            arrows: false, 
            slidesToScroll: 1, 
            className: "slides"
        }
        return (
            
            <Slider {...settings}>
            {photos.map((photo) => {
                return(
                    <div className = "slider-wrapper">
                    <img width="100%" src={photo.source} />
                    </div>
                )
            })}


            </Slider>
            
            
        ); 
    }
}