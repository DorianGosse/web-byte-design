import React from "react";

import "./home.css";
import TextBox from "../../components/textbox/TextBox";

export default function home() {
  return (
    <div className="home-page">
      <div className="textbox">
        <TextBox />
      </div>
      <img
        className="top-img"
        src={require("../../assets/hometop.jpg")}
        alt="laptop&coffee"
      />
    </div>
  );
}
