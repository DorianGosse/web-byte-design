import React from "react";
import "./Contact.css";

import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

import Form from "../../components/interactable/formComponents/contactForm/From";

export default function Contact() {
  return (
    <div className="contact-page">
      <NavBar />
      <img
        className="contact-img"
        src={require("../../assets/contact.jpg")}
        alt="ContactUsImg"
      />
      <Footer />
    </div>
  );
}
