import React, { Component } from "react";

export default class MudandoState extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: "Jefferson"
    };
  }

  handleChange(e) {
    this.setState({ text: "Anderson" });
  }

  render() {
    return <h1 onClick={this.handleChange}>{this.state.text}</h1>;
  }
}
