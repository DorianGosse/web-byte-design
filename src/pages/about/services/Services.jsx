import React from 'react'; 
import './Services.css'; 

import NavBar from "../../../components/navBar/NavBar";
import Footer from '../../../components/footer/Footer';

export default function Services(){
    return(
        <div className="services-page">
            <NavBar/>
            <div className="images">
            <img className="business-img" src={require("../../../assets/about/businessOwner.jpeg")} alt="Business Background"/>
            <img className="blogger-img" src={require("../../../assets/about/blogger.jpg")} alt="Blog Background"/>
            <img className="hobby-img" src={require("../../../assets/about/personal.png")} alt="Personal Background"/>
            </div>
            <Footer/>
        </div>
    )
}