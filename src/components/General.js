/* eslint-disable no-useless-constructor */
//A section to add general information like name, email, phone number.
import React from "react";

const General = ({ general, onChange }) => {
  return (
    <div className="general">
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="First Name"
        onChange={(e) => onChange(e)}
        value={general.firstName}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        onChange={(e) => onChange(e)}
        value={general.lastName}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
        value={general.email}
      />
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        onChange={(e) => onChange(e)}
        value={general.phoneNumber}
      />
      <textarea
        name="aboutMe"
        id="aboutMe"
        placeholder="A short description / About me"
        rows="3"
        maxLength={300}
        onChange={(e) => onChange(e)}
        value={general.aboutMe}
      />
    </div>
  );
};

export default General;
