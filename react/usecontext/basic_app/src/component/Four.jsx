import React from 'react';

const Four = ({ theme }) => {
  const Styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <h1 style={Styles}>Four</h1>
  );
};

export default Four;
