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
      general: { firstName: "", lastName: "", email: "", phoneNumber: "" },
      education: {},
      experience: {},
    };
  }

  handleGeneral = (data) => {
    this.setState({ general: data });
  };

  render() {
    const { general } = this.state;
    return (
      <main>
        <General parentCallback={this.handleGeneral} />
        <Education />
        <Experience />
        <CV data={general} />
      </main>
    );
  }
}

export default App;
