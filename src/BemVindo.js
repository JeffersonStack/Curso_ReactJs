import React, { Component } from "react";

export default class BemVindo extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}
