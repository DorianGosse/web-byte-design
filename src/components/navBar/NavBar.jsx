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
        <a href="/">
          <img
            src={require("../../assets/Source file.png")}
            alt="Logo"
            className="nav-logo"
          />
        </a>
        <div className="navigatoin">
          <ul className="navigation-items">
            <li>
              <a href="/Home">HOME</a>
            </li>
            <li>
              <a href="/Pricing">ABOUT</a>
              <ul className="About-sub-list">
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="About-Us">About Us</a>
                </li>
                <li>
                  <a href="Our-Team">Our Team</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/About">PRICING</a>
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
