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
        <div className="cv-details">
          <h1 className="cv-name">{`${firstName} ${lastName}`}</h1>
          <div className="cv-contact-details">
            <h3>Personal Details</h3>
            <p>{`✉️ ${email}`}</p>
            <p>{`📞 ${phoneNumber}`}</p>
          </div>
          <div className="cv-aboutMe">
            <h3>About Me</h3>
            <p>{aboutMe}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
