/* eslint-disable no-useless-constructor */
//A section to add general information like name, email, phone number.
import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.props.parentCallback(this.state)
    );
  };

  render() {
    return (
      <div className="general">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={this.handleChange}
          value={this.state.phoneNumber}
        />
        <textarea
          name="aboutMe"
          id="aboutMe"
          placeholder="A short description / About me"
          rows="3"
          maxLength={300}
          onChange={this.handleChange}
          value={this.state.aboutMe}
        />
      </div>
    );
  }
}

export default General;
