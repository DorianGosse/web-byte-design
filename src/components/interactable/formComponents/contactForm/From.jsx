import React, { Component } from "react";
import "./Form.css";

/* Import Form Components*/

import Input from "../input/TextInput";
import { Button } from "../../button/button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      age: "",
      gender: "",
      expertise: "",
      about: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
  }

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <input />
        <input />
        <input />
        <input />
        <Button>Submit</Button>
        <Button>Clear</Button>
      </form>
    );
  }
}
