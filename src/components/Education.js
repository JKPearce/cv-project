/* eslint-disable no-useless-constructor */
////A section to add your educational experience (school name, title of study, date of study)
import React from "react";

const Education = ({ education, onChange, remove, id }) => {
  return (
    <div className="education">
      <input
        type="text"
        name="degreeName"
        id="degreeName"
        placeholder="Degree Name"
        onChange={(e) => onChange(e, id)}
        value={education.degreeName}
      />
      <input
        type="text"
        name="schoolName"
        id="schoolName"
        placeholder="School Name"
        onChange={(e) => onChange(e, id)}
        value={education.schoolName}
      />
      <input
        type="text"
        name="startYear"
        id="startYear"
        placeholder="Start Year"
        onChange={(e) => onChange(e, id)}
        value={education.startYear}
      />
      <input
        type="text"
        name="endYear"
        id="endYear"
        placeholder="End Year (or Present)"
        onChange={(e) => onChange(e, id)}
        value={education.endYear}
      />
      <button onClick={() => remove(id)}>Delete</button>
    </div>
  );
};

export default Education;
