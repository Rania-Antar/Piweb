import React, { Component } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
require("./configs/axiosConfiguration");
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
