/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        aboutMe: "",
      },
      education: {},
      experience: {},
    };
  }

  handleGeneral = (data) => {
    this.setState({ general: data });
  };
  handleEducation = (data) => {
    this.setState({ education: data });
  };
  handleExperience = (data) => {
    this.setState({ experience: data });
  };

  render() {
    const { general } = this.state;
    return (
      <main>
        <div className="input-section">
          <h2>Personal Details</h2>
          <General parentCallback={this.handleGeneral} />
          <h2>Education</h2>
          <Education parentCallback={this.handleEducation} />
          <h2>Experience</h2>
          <Experience parentCallback={this.handleExperience} />
        </div>
        <CV data={general} />
      </main>
    );
  }
}

export default App;
