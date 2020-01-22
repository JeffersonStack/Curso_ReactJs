import React, { Component } from "react";

// import { Container } from './styles';

export default class ButtonSearch extends Component {
  render() {
    return (
      <button
        onClick={() => {
          alert("Search");
        }}
      >
        Search
      </button>
    );
  }
}
