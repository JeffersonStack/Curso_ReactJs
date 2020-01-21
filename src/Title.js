import React from "react";

class Title extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Default Props
Title.defaultProps = {
  name: "Default"
};

export default Title;
