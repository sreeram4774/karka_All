import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  let a=0
  const handleFocus = () => {
    inputRef.current.focus();
    console.log("hiii")
    a++
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
      <p>{a}</p>
    </div>
  );
}

export default App;
