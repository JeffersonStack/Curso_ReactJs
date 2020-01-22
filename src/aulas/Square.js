import React from "react";

// import { Container } from './styles';

const Square = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        width: "100px",
        height: "100px"
      }}
    />
  );
};

export default Square;
