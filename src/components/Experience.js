/* eslint-disable no-useless-constructor */
//A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
import React, { Component } from "react";

const Experience = ({ experience, remove, id, onChange }) => {
  return (
    <div className="experience">
      <input
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Company Name"
        onChange={(e) => onChange(e, id)}
        value={experience.companyName}
      />
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        placeholder="Position Title"
        onChange={(e) => onChange(e, id)}
        value={experience.positionTitle}
      />
      <input
        type="text"
        name="startYear"
        id="startYear"
        placeholder="Start Year"
        onChange={(e) => onChange(e, id)}
        value={experience.startYear}
      />
      <input
        type="text"
        name="endYear"
        id="endYear"
        placeholder="End Year (or Present)"
        onChange={(e) => onChange(e, id)}
        value={experience.endYear}
      />
      <textarea
        name="description"
        id="description"
        placeholder="A short description and skills aquired"
        rows="3"
        maxLength={200}
        onChange={(e) => onChange(e, id)}
        value={experience.description}
      />
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

// class Experience extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState(
//       {
//         [e.target.name]: e.target.value,
//       },
//       () => this.props.parentCallback(this.state)
//     );
//   };

//   render() {
// return (
//   <div className="experience">
//     <input
//       type="text"
//       name="companyName"
//       id="companyName"
//       placeholder="Company Name"
//       onChange={this.handleChange}
//       value={this.state.companyName}
//     />
//     <input
//       type="text"
//       name="positionTitle"
//       id="positionTitle"
//       placeholder="Position Title"
//       onChange={this.handleChange}
//       value={this.state.positionTitle}
//     />
//     <input
//       type="text"
//       name="startYear"
//       id="startYear"
//       placeholder="Start Year"
//       onChange={this.handleChange}
//       value={this.state.startYear}
//     />
//     <input
//       type="text"
//       name="endYear"
//       id="endYear"
//       placeholder="End Year (or Present)"
//       onChange={this.handleChange}
//       value={this.state.endYear}
//     />
//     <textarea
//       name="description"
//       id="description"
//       placeholder="A short description and skills aquired"
//       rows="3"
//       maxLength={200}
//       onChange={this.handleChange}
//       value={this.state.description}
//     />
//     <button onClick={this.props.delete}>Delete</button>
//   </div>
// );
//   }
// }

export default Experience;
