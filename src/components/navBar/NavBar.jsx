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
              className="nav-logo-desktop"
            />
          </a>
          <ul className="navigation-items">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <a href="/"></a>
            <li>
              <a href="/Pricing">PRICING</a>
            </li>
            <li id="contact">
              <a href="/Contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
