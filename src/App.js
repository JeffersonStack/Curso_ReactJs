import React, { Component } from "react";
import Timer from "./Timer";

// import { Container } from './styles';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showTime: true
    };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        {this.state.showTime && <Timer />}
        <button
          onClick={() => this.setState({ showTime: !this.state.showTime })}
        >
          Hide
        </button>
      </div>
    );
  }
}
