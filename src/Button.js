import React, { Component } from "react";
import ButtonLike from "./ButtonLike";
import ButtonSearch from "./ButtonSearch";

// import { Container } from './styles';

export default class Button extends Component {
  render() {
    return (
      <div>
        <ButtonLike />
        <ButtonSearch />
      </div>
    );
  }
}
