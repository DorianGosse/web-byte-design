import React from "react";
import "./error.css";
import { Button } from "../../components/interactable/button/button";
import NavBar from "../../components/navBar/NavBar";

// need to get button to send home when clicked

const Error = () => {
  return (
    <div className="error-page">
      <NavBar></NavBar>

      <div className="error-img">
        <img
          className="error-img"
          src={require("../../assets/404-error(1).jpg")}
          alt="error-img"
        />
      </div>
    </div>
  );
};

export default Error;
