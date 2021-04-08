import React, { Component } from "react";

class App extends Component {
  state = { number: 0 };

  countUp = () => {
    this.setState(({ number }) => ({
      number: number + 1,
    }));
  };

  countDown = () => {
    const { number } = this.state;
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    const { number } = this.state;
    const { countUp, countDown } = this;

    return (
      <>
        <div>
          <button onClick={this.countUp}>+</button>
          <button onClick={this.countDown}>-</button>
          {this.state.number}
        </div>
      </>
    );
  }
}

export default App;
