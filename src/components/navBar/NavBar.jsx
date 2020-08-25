import React, { Component } from "react";
import "./NavBar.css";
export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav>
        <div className="navigatoin">
          <a href="/">
            <img
              src={require("../../assets/Source file.png")}
              alt="Logo"
              className="nav-logo-mobile712"
            />
          </a>
          <ul className="navigation-items">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
              {/* <ul className="About-sub-list">
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/About-Us">About Us</a>
                </li>
                <li>
                  <a href="/Our-Team">Our Team</a>
                </li>
              </ul> */}
            </li>{" "}
            <a href="/">
              <img
                src={require("../../assets/Source file.png")}
                alt="Logo"
                className="nav-logo-desktop"
              />
            </a>
            <li>
              <a href="/Pricing">PRICING</a>
            </li>
            <li>
              <a href="/Contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
