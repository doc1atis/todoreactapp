import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>hello olgy</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
