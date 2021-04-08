import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    countNum: 0,
  };

  addNumber = (inputNumber) => {
    this.setState({
      countNum: inputNumber,
    });
  };
  render() {
    const { countNum } = this.state;

    return (
      <>
        <div>{countNum}</div>
        <button
          onClick={() => {
            this.addNumber(countNum + 1);
          }}
        >
          increase
        </button>
      </>
    );
  }
}

export default App;
