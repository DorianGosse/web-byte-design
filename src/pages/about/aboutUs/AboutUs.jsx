import React from 'react';
import './AboutUs.css';

import NavBar from "../../../components/navBar/NavBar";
import Footer from '../../../components/footer/Footer';

export default function AboutUs(){
    return(
        <div className="about-us-page">
            <NavBar/>
            <Footer/>
        </div>
    )
}