import React from "react";

export default function Button(childrem, handleClick) {
  return (
    <div>
      <button onClick={handleClick}>{childrem}</button>
    </div>
  );
}
