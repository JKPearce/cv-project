/* eslint-disable no-useless-constructor */
//A section to add general information like name, email, phone number.
import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
      </div>
    );
  }
}

export default General;
