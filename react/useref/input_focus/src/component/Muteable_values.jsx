// import { useRef } from "react";

// function App() {
//   const countRef = useRef(0);

//   const handleClick = () => {
//     countRef.current += 1;
//     console.log(`Clicked ${countRef.current} times`);
//   };

//   return (
//     <div>
//       <p>{countRef.current}</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;



// import { useRef } from "react";

// function App() {
//   const fruitsRef = useRef(["apple", "banana", "orange"]); 

//   const addFruit = () => {
//     fruitsRef.current.push("mango"); 
//     console.log(fruitsRef.current);  
//   };

//   const changeFruit = () => {
//     fruitsRef.current[1] = "grape"; 
//     console.log(fruitsRef.current);  
//   };

//   return (
//     <div>
//       <button onClick={addFruit}>Add Mango</button>
//       <button onClick={changeFruit}>Change Banana to Grape</button>
//       <p>{fruitsRef.current}</p>
//     </div>
//   );
// }

// export default App;



import { useRef, useState } from "react";

function App() {
  const [render, setRender] = useState(0);
  const fruitsRef = useRef(["apple", "banana", "orange"]);

  const addFruit = () => {
    fruitsRef.current.push("mango");
    setRender(render + 1); 
  };

  const changeFruit = () => {
    fruitsRef.current[1] = "grape";
    setRender(render + 1); 
  };

  return (
    <div>
      <ul>
        {fruitsRef.current.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
      <button onClick={changeFruit}>Change Banana to Grape</button>
    </div>
  );
}

export default App;

