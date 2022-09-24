/* eslint-disable no-useless-constructor */
////A section to add your educational experience (school name, title of study, date of study)
import React, { Component } from "react";

class Education extends Component {
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
      <div className="education">
        <input
          type="text"
          name="degreeName"
          id="degreeName"
          placeholder="Degree Name"
          onChange={this.handleChange}
          value={this.state.degreeName}
        />
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          placeholder="School Name"
          onChange={this.handleChange}
          value={this.state.schoolName}
        />
        <input
          type="text"
          name="startYear"
          id="startYear"
          placeholder="Start Year"
          onChange={this.handleChange}
          value={this.state.startYear}
        />
        <input
          type="text"
          name="endYear"
          id="endYear"
          placeholder="End Year (or Present)"
          onChange={this.handleChange}
          value={this.state.endYear}
        />
        <button onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}

export default Education;
