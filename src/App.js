import React from "react";
import Title from "./Title";
import Square from "./Square";

function App() {
  return (
    <div className="App">
      <Title name="Jefferson" soma={1 + 2} />
      {["blue", "red", "green"].map(square => (
        <Square key={square} color={square} />
      ))}
    </div>
  );
}

export default App;
