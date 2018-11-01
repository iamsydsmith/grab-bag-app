import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    this.context.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const appState = this.context.store.getState();

    return (
      <div className="App">
        <h1>Learn React</h1>
      </div>
    );
  }
}

export default App;
