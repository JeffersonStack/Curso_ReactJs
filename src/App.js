import React, { Component } from "react";
import Square from "./Square";

// import { Container } from './styles';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }

  render() {
    return (
      <div>
        <Square color={this.state.color} />
      </div>
    );
  }
}
