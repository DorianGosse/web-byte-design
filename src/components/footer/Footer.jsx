import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="Socials">
          <ul>
            <li className="list-title">Socials</li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="Contact">
          <ul>
            <li className="list-title">Contact</li>
            <li>
              <a href="/">Request A Quote</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">See Our Work</a>
            </li>
          </ul>
        </div>

        <div className="Services">
          <ul className="unstyled-list">
            <li className="list-title">Services</li>
            <li>
              <a href="/">Webstie Development</a>
            </li>
            <li>
              <a href="/">Consultation</a>
            </li>
            <li>
              <a href="/">Graphic Design</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
