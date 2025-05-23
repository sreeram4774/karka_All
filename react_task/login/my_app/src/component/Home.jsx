import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Input = () => {
  const [input, setInput] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const obj = {
    email: "sreeram@gmail.com",
    password: "12345"
  };

  const handle_change = (e) => {
    setInput(e.target.value);
  };

  const handle_changes = (e) => {
    setPass(e.target.value);
  };

  const handle_click = () => {
    const isEmailCorrect = input === obj.email;
    const isPasswordCorrect = pass === obj.password;

    if (isEmailCorrect && isPasswordCorrect) {
      navigate('/Show');

      axios.post("http://localhost:3001/users", {
        email: input,
        password: pass
      }).then(response => {
        console.log("Posted to db.json", response.data);
      }).catch(err => {
        console.error("Error posting data:", err);
      });

    } else if (!isEmailCorrect && isPasswordCorrect) {
      alert("Your Email is wrong");
    } else if (isEmailCorrect && !isPasswordCorrect) {
      alert("Your Password is wrong");
    } else {
      alert("Email and Password are incorrect");
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
      <br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={handle_changes}
      />
      <br /><br />
      <button onClick={handle_click}>Click</button>
    </>
  );
};

export default Input;
