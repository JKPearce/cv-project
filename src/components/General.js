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
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
        />
      </div>
    );
  }
}

export default General;
