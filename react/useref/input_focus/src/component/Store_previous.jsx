import { useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const prevTextRef = useRef("");

  const handleChange = (e) => {
    prevTextRef.current = text; 
    setText(e.target.value);
    console.log(prevTextRef)
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Current: {text}</p>
      <p>Previous: {prevTextRef.current}</p>
    </div>
  );
}

export default App;






