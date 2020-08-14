import React, { Component } from "react";
import "./Form.css";

/* Import Form Components*/

import { Button } from "../../button/button";
import { Redirect } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      companyName: "",
      msg: "",
      characterCount: 1500,

      formValid: false,
      nameValid: true,
      msgValid: true,
      emailVaild: true,
    };
  }

  /*Handle form Changes
  ===================================*/
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCompanyChange = (event) => {
    this.setState({ companyName: event.target.value });
  };
  handleMsgChange = (event) => {
    var input = event.target.value;
    this.setState({ msg: event.target.value });
    this.setState({ characterCount: 1500 - input.length });
  };
  /*Rendering the Char count
  =================================*/
  renderCharsLeft = () => {
    var remainingChar = this.state.characterCount;
    let content;

    if (remainingChar <= 0 || remainingChar === null) {
      content = (
        <p className="char-count" style={styles.warnings}>
          characters left: {this.state.characterCount}
        </p>
      );
    } else {
      content = (
        <p className="char-count" style={{ fontSize: 14 }}>
          characters left: {this.state.characterCount}
        </p>
      );
    }
    return content;
  };

  /*Rendering Field Warnings
  =================================*/
  renderNameWarning = () => {
    let content;
    if (this.state.nameValid === false) {
      if (this.state.name === "" || this.state.name === null) {
        content = <p style={styles.warnings}>Please enter your name***</p>;
        return content;
      } else if (this.state.name.length <= 5) {
        content = (
          <p style={styles.warnings}>
            Please enter your first and last name***
          </p>
        );
        return content;
      }
    }
  };

  renderEmailWarning = () => {
    let content;
    if (this.state.emailVaild === false) {
      if (this.state.email === null || this.state.email === "") {
        content = (
          <p style={styles.warnings}>Please enter your email address***</p>
        );
        return content;
      } else {
        content = (
          <p style={styles.warnings}>Please enter a valid email address***</p>
        );
        return content;
      }
    }
  };

  renderMsgWarning = () => {
    let content;
    if (this.state.msgValid === false) {
      if (this.state.msg === "" || this.state.msg === null) {
        content = <p style={styles.warnings}>Please enter your message</p>;
        return content;
      } else if (this.state.msg.length < 150) {
        content = (
          <p style={styles.warnings}>
            Please ensure your message is at least 150 characters long
          </p>
        );
        return content;
      } else if (this.state.msg.length > 1500) {
        content = (
          <p style={styles.warnings}>
            {" "}
            Your message is too long. Messages must be 1500 characters or less
          </p>
        );
        return content;
      }
    }
  };

  /*Checking From values*/
  checkMsgValue = () => {
    if (
      this.state.msg.length > 1500 ||
      this.state.msg.length < 150 ||
      this.state.msg === null
    ) {
      this.setState({ msgValid: false });
    }
  };

  checkNameValue = () => {
    if (this.state.name.length <= 5 || this.state.name == null) {
      this.setState({ nameValid: false });
    }
  };

  checkEmailValue = () => {};

  /* Form Submit and Clear
  ===============================*/
  // FIX SUBMIT LOGIC TO SEND EMAIL
  handleSubmit = (event) => {
    this.checkNameValue();
    this.checkMsgValue();
    this.checkEmailValue();
    event.preventDefault();
  };

  // make seperate method handling email varification

  handleClearForm() {
    this.setState({ name: "" });
    this.setState({ email: "" });
    this.setState({ companyName: "" });
    this.setState({ msg: "" });
    this.setState({ characterCount: 1500 });
  }

  render() {
    return (
      <div className="form-container">
        <div className="form">
          <label htmlFor="contact-name" className="form-label">
            Name: *
          </label>
          {this.renderNameWarning()}
          <div className="input-field" id="name-container">
            <input
              type="text"
              className="name-field"
              id="contact-name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>

          <label htmlFor="email" className="form-label">
            Email Address: *
          </label>
          {this.renderEmailWarning()}
          <div className="input-field" id="email-container">
            <input
              type="text"
              className="email-field"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>

          <label htmlFor="contact-company" className="form-label">
            Company / Brand
          </label>
          <div className="input-field" id="company-container">
            <input
              type="text"
              className="company-field"
              id="contact-company"
              placeholder="Company/Brand"
              value={this.state.companyName}
              onChange={this.handleCompanyChange}
            />
          </div>

          <label htmlFor="contact-msg" className="form-label">
            Message: *
          </label>
          {this.renderCharsLeft()}
          {this.renderMsgWarning()}
          <div className="input-field" id="msg-container">
            <textarea
              className="msg-field"
              id="contact-message"
              placeholder="Type your message here. Min-Max 150 - 1500 characters "
              value={this.state.msg}
              onChange={this.handleMsgChange}
            />
          </div>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          <Button onClick={this.handleClearForm}>Clear</Button>
        </div>
      </div>
    );
  }
}

/*Style Rules
================================================ */
const styles = {
  warnings: {
    color: "red",
    fontSize: 14,
  },
};

export default Form;
