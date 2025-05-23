import React, { useState } from 'react';
import One from './component/One';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };

  return (
    <>
      <button onClick={toggle}>ColorChange</button>
      <One theme={theme} />
    </>
  );
};

export default App;
