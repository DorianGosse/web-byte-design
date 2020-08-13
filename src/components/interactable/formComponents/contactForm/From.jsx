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
      nameValid: false, 
      msgValid: false, 
      emailVaild: false,


    };
    const warningStyle = {
      color:'red',
      fontSize: 14

    }; 
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
    var input = event.target.value;
    this.setState({msg: event.target.value})
    this.setState({characterCount: 1500- input.length})
  }

  renderCharsLeft = () =>{
    var remainingChar = this.state.characterCount; 
    let content;

    if (remainingChar <= 0 || remainingChar === null ){
      content = <p className="char-count"style={{color:"red"}}> characters left: {this.state.characterCount} </p>
    } else {
      content = <p className="char-count"> characters left: {this.state.characterCount} </p>
    }
    return content;
  }

  // FIX SUBMIT LOGIC TO SEND EMAIL 
    handleSubmit = (event) => {
      // alert(`${this.state.name} ${this.state.email} ${this.state.companyName} ${this.state.msg}`) 
    }
   
    checkNameValue = () =>{
      if(this.state.name !== "" || this.state.name !== null){
        this.setState({nameValid: true})
      }
      else{
        return(<p>something Changed</p>); 
      }
    }
    checkEmailValue = () => {

    }

    checkMsgValue = () => {
      if(this.state.msg.length < 150){
        // return the text 
      }else if(this.state.msg.length > 1500){
        //retrun the text
      }else {
        this.setState({msgValid: true})
      }      
      
    }

    // make seperate method handling email varification 

  handleClearForm() {
    this.setState({name: ""})
    this.setState({email: ""})
    this.setState({companyName: ""})
    this.setState({msg: ""})
    this.setState({characterCount: 1500})
  }

  render() {
    return (
      <div className="form-container">
      <div className="form" >
       
        <label for="contact-name" className="form-label">Name: *</label>
        {this.checkNameValue()}

        <div className="input-field" id="name-container">
          <input type="text" 
          className = "name-field" id="contact-name"
          placeholder="Your Name"
          value = {this.state.name}
          onChange={this.handleNameChange}/>
        </div>
        
        <label for="email" className="form-label" >Email Address: *</label>

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

         <label for="contact-msg" className="form-label">Message: *</label>
         {this.renderCharsLeft()}
        <div className="input-field" id="msg-container"> 

          <textarea 
          className="msg-field" id="contact-message" 
          placeholder="Type your message here. Min-Max 150 - 1500 characters "
          value={this.state.msg}
          onChange={this.handleMsgChange}/>
        </div>
        <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
        <Button onClick={this.handleClearForm}>Clear</Button>
       
      </div>
      </div>
      

       
    );
  }
}
export default Form