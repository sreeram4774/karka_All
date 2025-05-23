import React, { useState } from 'react';


const InputDisplay = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setoutputValue] =useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = () =>{
    //  setoutputValue(inputValue)
    //  setInputValue(" ")
    if (inputValue.trim() !=="") { 
        setoutputValue(inputValue);
        setInputValue(""); 
      }
     
  }

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something" 
      />
      <button onClick={handleClick}>Enter</button>
      <h1>{outputValue}</h1> 
    </div>
  );
};

export default InputDisplay;