/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstName, lastName, email, phoneNumber, aboutMe } =
      this.props.general;
    // const { degreeName, schoolName, startYear, endYear } = this.props.education;
    // // const { education } = this.props;

    // console.log(this.props.education);

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
        <div className="cv-body">
          <div className="cv-education">
            <h3>Education</h3>
            {this.props.education.map((school, index) => (
              <div key={index} className="cv-education">
                <h4>{school.degreeName}</h4>
                <h4>{school.schoolName}</h4>
                <h6>{school.startYear}</h6>
                <h6>{school.endYear}</h6>
              </div>
            ))}
            <div className="cv-experience">
              <h3>Work Experience</h3>
              {this.props.experience.map((exp, index) => (
                <div key={index} className="cv-education">
                  <h4>{exp.companyName}</h4>
                  <h4>{exp.positionTitle}</h4>
                  <h6>{exp.startYear}</h6>
                  <h6>{exp.endYear}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
