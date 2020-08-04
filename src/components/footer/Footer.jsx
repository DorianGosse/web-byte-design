import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer530-up">
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
              <a href="/" className = "desktop">Request A Quote</a>
              <a href="/" className = "mobile650">Quote</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/" className="desktop">See Our Work</a>
              <a href="/" className = "mobile650"> Our Work</a>
            </li>
          </ul>
        </div>

        <div className="Services">
          <ul className="unstyled-list">
            <li className="list-title">Services</li>
            <li>
              <a href="/" className = "desktop">Webstie Development</a>
              <a href ="/" className = "mobile650">Web Dev</a>
            </li>
            <li>
              <a href="/">Consultation</a>
            </li>
            <li>
              <a href="/" className="desktop">Graphic Design</a>
              <a href="/" className="mobile650">Design</a>
            </li>
          </ul>
        </div>
        </div>

      <div className="footer-below530">
      <ul>
        <li className="list-title"> <a href = "/"> Contact </a> </li>
      <li className="list-title"><a href="/">Services</a></li>
      <li className="list-title"><a href="/">Socials</a></li>
      </ul>

      </div>

      </footer>
      
    );
  }
}
