import React, { useState } from 'react';

const Main = ({parent}) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const click = () => {
    parent(input)
  };

  return (
    <>
      <input type="text" onChange={handleInputChange} value={input} />
      <button onClick={click}>Click</button>
    </>
  );
};

export default Main;
