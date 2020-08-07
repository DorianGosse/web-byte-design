import React from "react";
import "./Contact.css";

import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Form from "../../components/interactable/formComponents/contactForm/From"; 


export default function Contact() {
  return (
    <div className="contact-page">
      <NavBar />
      <div className = "form-area"> 
        <h2>Drop us a Line!</h2> 
      </div>
      <div className="contact-form">
      <Form/>
      </div>
       <Footer/>
    </div>
   
  );
}
