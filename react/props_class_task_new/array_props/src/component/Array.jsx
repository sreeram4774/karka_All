import React from "react";

export const Add = (props) => {
  return (
    <ul>
      {props.name.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
