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
      education: [],
      experience: [],
    };
  }

  handleGeneral = (data) => {
    this.setState({ general: data });
  };

  handleEducation = (data, index) => {
    this.setState(() => {
      const newEducation = [...this.state.education];
      newEducation[index] = data;
      return { education: newEducation };
    });
  };

  handleExperience = (data, index) => {
    this.setState(() => {
      const newExperience = [...this.state.experience];
      newExperience[index] = data;
      return { experience: newExperience };
    });
  };

  addEducation = () => {
    const newEducation = [...this.state.education];

    newEducation.push({});
    this.setState({ education: newEducation });
  };

  addExperience = () => {
    const newExperience = [...this.state.experience];

    newExperience.push({});
    this.setState({ experience: newExperience });
  };

  delete = (arrayName, index) => {
    this.setState(() => {
      const newState =
        arrayName === "education"
          ? [this.state.education]
          : [this.state.experience];

      newState.splice(index, 1);
      return { [arrayName]: newState };
    });
  };

  render() {
    const { general, education, experience } = this.state;
    // console.log("parent ", this.state);

    return (
      <main>
        <div className="input-section">
          <h2>Personal Details</h2>
          <General parentCallback={this.handleGeneral} />
          <h2>Education</h2>
          {this.state.education.map((e, i) => (
            <>
              <Education
                key={i}
                parentCallback={(data) => this.handleEducation(data, i)}
                delete={this.delete("education", i)}
              />
            </>
          ))}
          <button onClick={this.addEducation}>Add Education</button>

          <h2>Experience</h2>
          {this.state.experience.map((e, i) => (
            <>
              <Experience
                key={i}
                parentCallback={(data) => this.handleExperience(data, i)}
                delete={() => this.delete("experience", i)}
              />
            </>
          ))}
          <button onClick={this.addExperience}>Add Experience</button>
        </div>
        <CV general={general} education={education} experience={experience} />
      </main>
    );
  }
}

export default App;
