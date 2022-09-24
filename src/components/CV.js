/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstName, lastName, email, phoneNumber, aboutMe } =
      this.props.data;
    return (
      <div className="cv">
        <header className="introduction">
          <h1>{`${firstName} ${lastName}`}</h1>
          <p>{aboutMe}</p>
        </header>
        <div className="contact-details">
          <h3>Personal Details</h3>
          <div>{`Email: ${email}`}</div>
          <div>{`Phone Number: ${phoneNumber}`}</div>
        </div>
      </div>
    );
  }
}

export default CV;
