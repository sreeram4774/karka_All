import React from 'react'
import { useEffect } from 'react';

const Run_once = () => {
    useEffect(() => {
        // console.log("Component mounted!");
      
        return () => {
          console.log("Component unmounted!");
        };
      }, []);
      
  return (
    <>
    </>
  )
}

export default Run_once


// import React, { useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     console.log("Component Mounted!");  
//   }, []);

//   return <h1>Welcome</h1>;
// };

// export default App;
