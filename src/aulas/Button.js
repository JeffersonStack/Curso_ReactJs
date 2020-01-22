import React, { Component } from "react";

// import { Container } from './styles';

export default class Button extends Component {
  constructor(props, handleClick) {
    super();
  }

  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.children}</button>
    );
  }
}
