import React, { Component } from "react";
import "./NaVBar.css";

export default class NavBar extends Component{
    state = {
        isOpen = false, 
    }; 

    handleToggle = () => {
        this.setState ({isOpen: !this.state.isOpen}); 
    }; 

    render(){
        return (
            <div></div>
        )
    }
}