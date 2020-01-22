import React, { Component } from "react";

export default class MudandoState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Jefferson"
    };
  }

  handleChange = () => this.setState({ text: "Anderson" });

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.handleChange}>Mudar Nome</button>
      </div>
    );
  }
}
