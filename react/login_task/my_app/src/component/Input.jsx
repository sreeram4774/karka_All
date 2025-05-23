import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const [showInput, setShowInput] = useState("");
  const [showPass, setShowPass] = useState("");
  const navigate = useNavigate();

  const obj = {
    name: "sreeram",
    password: "12345"
  };

  const handle_change = (e) => {
    setInput(e.target.value);
  };

  const handle_changes = (e) => {
    setPass(e.target.value);
  };

  const handle_click = () => {
    const isEmailCorrect = input === obj.name;
    const isPasswordCorrect = pass === obj.password;

    setShowInput(isEmailCorrect ? "correct" : "false");
    setShowPass(isPasswordCorrect ? "correct" : "false");

    if (isEmailCorrect && isPasswordCorrect) {
      navigate('/Show');
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Enter Email"
        value={input}
        onChange={handle_change}
      />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={handle_changes}
      />
      <br />
      <button onClick={handle_click}>Click</button>
      <p>Email: {showInput}</p>
      <p>Password: {showPass}</p>
    </>
  );
};

export default Input;
