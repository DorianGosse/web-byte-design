import React from 'react'; 
import "./Pricing.css"; 

import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer"; 

export default function Pricing (){
    return(
        <div className="pricing-page">
            <div className="navigation"><NavBar/></div>

            <div className="pricing-disclaimer">
            <p>***This pricing calculator is used for a vague price range based on limited information meant to provide a very rought cost estimate.<br/>
            estimates here are not to be taken as final quotes as costs are subject to change based on additonial information and or business requirements. <br/>
            For final quotes on web solutions please contact us using the contact page <a href="/contact">here</a> for more information***</p>
            </div>

            <div className="footer"><Footer/></div>
        </div>
    )
}