import React, { Component } from "react";
import { Game } from "./modules/Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="background" />
        <div className="app__header">Game Of Life</div>
        <Game />
      </div>
    );
  }
}

export default App;
