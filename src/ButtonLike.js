import React, { Component } from "react";

export default class ButtonLike extends Component {
  render() {
    return (
      <button
        onClick={() => {
          alert("Like");
        }}
      >
        Like
      </button>
    );
  }
}
