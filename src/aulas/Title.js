import React, { Component } from "react";

export default class Title extends Component {
  handleClick() {
    console.log("Clickou no texto");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Clique</button>
      </div>
    );
  }
}
