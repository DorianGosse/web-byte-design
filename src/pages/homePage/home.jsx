import React from "react";

import "./home.css";
import TextBox from "../../components/textbox/TextBox";

export default function home() {
  return (
    <div className="home-page">
      <img
        className="top-img"
        src={require("../../assets/notebook.jpg")}
        alt=""
      />

      {/* <TextBox className="textbox" /> */}
    </div>
  );
}
