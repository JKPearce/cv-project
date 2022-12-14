import React from "react";

const CV = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  aboutMe,
  education,
  experience,
}) => {
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
        <div className="cv-experience">
          <h3>Work Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} className="cv-experience-details">
              <h4>{exp.positionTitle}</h4>
              <div className="date-section">
                <span>{exp.companyName} | </span>
                <span>{exp.startYear}</span> -<span>{exp.endYear}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="cv-education">
          <h3>Education</h3>
          {education.map((school, index) => (
            <div key={index} className="cv-education-details">
              <h4>{school.degreeName}</h4>
              <div className="date-section">
                <span>{school.schoolName} | </span>
                <span>{school.startYear}</span> -<span>{school.endYear}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
