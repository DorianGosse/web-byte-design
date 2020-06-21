import React from 'react';
import './AboutUs.css';

import NavBar from "../../../components/navBar/NavBar";
import Footer from '../../../components/footer/Footer';

export default function AboutUs(){
    return(
        <div className="about-us-page">
            <NavBar/>
            <img className="about-img" src={require("../../../assets/about/aboutUs.jpg")} alt="About Background"/>
            <Footer/>
        </div>
    )
}