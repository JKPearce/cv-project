/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import General from "./components/General";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
