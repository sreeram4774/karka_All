import React, { useEffect, useState } from "react";

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(interval);  
      console.log("Timer stopped!");
    };
  },[]);

  return <h1>Timer Running...</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      {show && <Timer />}
    </div>
  );
};

export default App;



// import React, { useEffect } from "react";

// const Timer = () => {
//   useEffect(() => {
//     console.log("Timer started...");

//     const interval = setInterval(() => {
//       console.log("Timer running...");
//     }, 1000);

//     return () => { 
//       clearInterval(interval);
//       console.log("Cleanup: Timer Stopped!");
//     };
//   });

//   return <h1>Timer Running...</h1>;
// };

// const App = () => {
//   return (
//     <div>
//       <Timer />
//     </div>
//   );
// };

// export default App;



// import React, { useEffect } from "react";

// const Example = () => {
//   useEffect(() => {
//     const handleResize = () => {
//       console.log("Window resized!");
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       console.log("Cleanup: Resize event removed");
//     };
//   }, []);

//   return <h1>Resize the window</h1>;
// };

// export default Example;
