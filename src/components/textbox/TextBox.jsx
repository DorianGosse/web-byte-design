import React from "react";
import "./TextBox.css";
import { Button } from "../interactable/button/button";

export default function TextBox() {
  return (
    <div className="box">
      <p className="top-p">
        Using the latest training and technologies, Web Byte Design is where
        business owners come for all their website development needs
      </p>
      <p className="bottom-p">
        Website development is not our job, <em> our passion</em>. We pride
        ourselves on not only developing the perfect website for your businesses
        but creating great working relationships to help get you’re website
        created as you envision it.
      </p>
      <Button>my button</Button>
    </div>
  );
}
