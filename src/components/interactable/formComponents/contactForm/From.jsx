import React, { Component } from "react";
import "./Form.css";

/* Import Form Components*/

import { Button } from "../../button/button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      companyName: "", 
      msg: "",
    };
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleFormClear = this.handleFormClear.bind(this);
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  
  handleCompanyChange = (event) => {
    this.setState({companyName: event.target.value})
  }
  handleMsgChange = (event) => {
    this.setState({msg: event.target.value})
  }

  // FIX SUBMIT LOGIC TO SEND EMAIL 
    handleSubmit = (event) => {
      alert(`${this.state.name} ${this.state.email} ${this.state.companyName} ${this.state.msg}`)
      event.preventDefault() 
    }

  handleClearForm() {
    this.setState({name: ""})
    this.setState({email: ""})
    this.setState({companyName: ""})
    this.setState({msg: ""})
  }

  render() {
    return (
      <form className="container" >
       
        <label for="contact-name" className="form-label">Name:</label>

        <div className="input-field" id="name-container">
          <input type="text" 
          className = "name-field" id="contact-name"
          placeholder="Your Name"
          value = {this.state.name}
          onChange={this.handleNameChange}/>
        </div>
        
        <label for="email" className="form-label" >Email Address:</label>

        <div className="input-field" id="email-container">
          <input type="text" 
          className = "email-field" id="email" 
          placeholder="Email"
          value = {this.state.email}
          onChange={this.handleEmailChange}/>
        </div>

        <label for="contact-company" className="form-label">Company / Brand</label>

        <div className="input-field" id="company-container">

          <input type="text"
          className ="company-field" id="contact-company" 
          placeholder ="Company/Brand"
          value={this.state.companyName}
          onChange={this.handleCompanyChange}/>
        </div>

        <label for="contact-msg" className="form-label">Message:</label>

        <div className="input-field" id="msg-container"> 

          <textarea 
          className="msg-field" id="contact-message" 
          placeholder="Message"
          value={this.state.msg}
          onChange={this.handleMsgChange}/>
        </div>
        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={this.handleClearForm}>Clear</Button>
      </form>
    );
  }
}
export default Form