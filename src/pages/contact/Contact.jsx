import React from "react"; 
import './Contact.css';

import NavBar from "../../components/navBar/NavBar"; 
import Footer from "../../components/footer/Footer";

export default function Contact(){
    return(
        <div>
            <NavBar/>
            <img className="contact-img" src={require("../../assets/contact.jpg")} alt="ContactUsImg"/>
            <Footer/>
        </div>
    )
}