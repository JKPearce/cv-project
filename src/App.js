/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from "react";
import CV from "./components/CV";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";

const App = () => {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    aboutMe: "",
  });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function handleGeneral(e) {
    setGeneral({
      ...general,
      [e.target.name]: e.target.value,
    });
  }

  function addExperience() {
    setEducation((current) => [...current, {}]);
  }

  return (
    <main>
      <div className="input-section">
        <h2>Personal Details</h2>
        <General general={general} onChange={handleGeneral} />
        <h2>Education</h2>
        {education.map((e, i) => (
          <>
            <Education
              key={i}
              parentCallback={(data) => this.handleEducation(data, i)}
              delete={() => this.delete("education", i)}
            />
          </>
        ))}
        <button onClick={addExperience}>Add Experience</button>
      </div>
      <CV {...general} />
    </main>
  );
};
// return (
//   <main>
//     <div className="input-section">
//       <h2>Personal Details</h2>
//       <General />
//       <h2>Education</h2>
//       {/* {education.map((e, i) => (
//         <>
//           <Education
//             key={i}
//             parentCallback={(data) => this.handleEducation(data, i)}
//             delete={() => this.delete("education", i)}
//           />
//         </>
//       ))} */}
//     </div>
//     {/*
//       <h2>Experience</h2>
//       {experience.map((e, i) => (
//         <>
//           <Experience
//             key={i}
//             parentCallback={(data) => this.handleExperience(data, i)}
//             delete={() => this.delete("experience", i)}
//           />
//         </>
//       ))}
//       <button onClick={addExperience}>Add Experience</button>
//     </div>
//     <CV general={general} education={education} experience={experience} /> */}
//   </main>
// );
// };
//   constructor(props) {
//     super(props);

//     this.state = {
//       general: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         aboutMe: "",
//       },
//       education: [],
//       experience: [],
//     };

//     // this.delete = this.delete.bind(this);
//   }

//   handleGeneral = (data) => {
//     this.setState({ general: data });
//   };

//   handleEducation = (data, index) => {
//     this.setState(() => {
//       const newEducation = [...this.state.education];
//       newEducation[index] = data;
//       return { education: newEducation };
//     });
//   };

//   handleExperience = (data, index) => {
//     this.setState(() => {
//       const newExperience = [...this.state.experience];
//       newExperience[index] = data;
//       return { experience: newExperience };
//     });
//   };

//   addEducation = () => {
//     const newEducation = [...this.state.education];

//     newEducation.push({});
//     this.setState({ education: newEducation });
//   };

//   addExperience = () => {
//     const newExperience = [...this.state.experience];

//     newExperience.push({});
//     this.setState({ experience: newExperience });
//   };

//   delete = (arrayName, index) => {
//     this.setState(() => {
//       console.log("entered delete");
//       const newState =
//         arrayName === "education"
//           ? [...this.state.education]
//           : [...this.state.experience];

//       newState.splice(index, 1);
//       return { [arrayName]: newState };
//     });
//   };

//   render() {
//     const { general, education, experience } = this.state;
//     // console.log("parent ", this.state);

//     return (
//       <main>
//         <div className="input-section">
//           <h2>Personal Details</h2>
//           <General parentCallback={this.handleGeneral} />
//           <h2>Education</h2>
//           {this.state.education.map((e, i) => (
//             <>
//               <Education
//                 key={i}
//                 parentCallback={(data) => this.handleEducation(data, i)}
//                 delete={() => this.delete("education", i)}
//               />
//             </>
//           ))}
//           <button onClick={this.addEducation}>Add Education</button>

//           <h2>Experience</h2>
//           {this.state.experience.map((e, i) => (
//             <>
//               <Experience
//                 key={i}
//                 parentCallback={(data) => this.handleExperience(data, i)}
//                 delete={() => this.delete("experience", i)}
//               />
//             </>
//           ))}
//           <button onClick={this.addExperience}>Add Experience</button>
//         </div>
//         <CV general={general} education={education} experience={experience} />
//       </main>
//     );
//   }
// }

export default App;
