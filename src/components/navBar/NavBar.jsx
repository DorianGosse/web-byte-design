import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="navBar">
        <a href="/">
          <img
            src={require("../../assets/lightbulb1090.jpg")}
            alt="Logo"
            className="nav-logo"
          />
        </a>
        <div className="navigatoin">
          <ul className="navigation-items">
            <li>
              <a href="/Home"></a>HOME
            </li>
            <li>
              <a href="/Pricing">ABOUT</a>
              <ul className="About-sub-list">
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="About-Us"></a>About Us
                </li>
                <li>
                  <a href="Our-Team">Our Team</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/About"></a>PRICING
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
