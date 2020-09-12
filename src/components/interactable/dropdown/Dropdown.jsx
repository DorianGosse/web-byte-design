import React, { Component } from "react";
import Select from "react-select";
import "./Dropdown.css";

const options = [];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  /*insert logic for on change and such here
    ===================================================*/

  render() {
    return (
      <div className="dropdown-container">
        <Select
          placeholder={this.props.placeholder}
          options={this.props.options}
          onChange={this.props.onChange}
        ></Select>
      </div>
    );
  }
}
export default Dropdown;
