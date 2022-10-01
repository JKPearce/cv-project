import React from "react";

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

export default Experience;
