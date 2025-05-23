import React, { useContext } from 'react';
import ThemeContext from './Theme';

const Four = () => {
  const theme = useContext(ThemeContext);
  const textStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div style={textStyle}>Four</div>
  );
};

export default Four;
