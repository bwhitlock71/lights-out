import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>Welcome to lights-out</h1>
      <p>The goal of this game is to turn off all the lights on the grid! Here is the catch, when you change the state of a light, it will also change the state of it's adjacent lights.😱 Good luck!!</p>
      <Board />
    </div>
  );
}

export default App;
