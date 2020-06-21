import React from 'react'; 
import "./Pricing.css"; 

import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer"; 

export default function Pricing (){
    return(
        <div className="pricing-page">
            <div className="navigation"><NavBar/></div>
            <img className="pricing-img" src={require('../../assets/pricing.jpg')} alt="pricingBackground"/>
        <div className="footer"><Footer/></div>
        </div>
    )
}