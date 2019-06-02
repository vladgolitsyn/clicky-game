import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

export class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Header />;
        <Scoreboard />;
      </div>
    );
  }
}

export default App;
