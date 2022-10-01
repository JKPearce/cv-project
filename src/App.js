import React, { useState } from "react";
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

  function handleEducation(e, i) {
    setEducation((prevState) => {
      const newEducation = [...prevState];
      newEducation[i] = { ...prevState[i], [e.target.name]: e.target.value };
      return newEducation;
    });
  }

  function handleExperience(e, i) {
    setExperience((prevState) => {
      const newExperience = [...prevState];
      newExperience[i] = { ...prevState[i], [e.target.name]: e.target.value };
      return newExperience;
    });
  }

  function addEducation() {
    const newEducation = [...education];
    newEducation.push({});
    setEducation(newEducation);
  }

  function addExperience() {
    const newExperience = [...experience];
    newExperience.push({});
    setExperience(newExperience);
  }

  function deleteEducation(index) {
    setEducation((prevState) => {
      const newEducationState = [...prevState];
      newEducationState.splice(index, 1);
      return newEducationState;
    });
  }
  function deleteExperience(index) {
    setExperience((prevState) => {
      const newExpState = [...prevState];
      newExpState.splice(index, 1);
      return newExpState;
    });
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
              education={education}
              id={i}
              key={i}
              onChange={handleEducation}
              remove={deleteEducation}
            />
          </>
        ))}
        <button onClick={addEducation}>Add Education</button>

        <h2>Experience</h2>
        {experience.map((e, i) => (
          <>
            <Experience
              experience={experience}
              key={i}
              id={i}
              onChange={handleExperience}
              remove={deleteExperience}
            />
          </>
        ))}
        <button onClick={addExperience}>Add Experience</button>
      </div>

      <CV {...general} education={education} experience={experience} />
    </main>
  );
};

export default App;
