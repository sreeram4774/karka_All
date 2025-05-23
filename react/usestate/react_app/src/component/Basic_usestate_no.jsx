// import React from 'react'

// const Basic_usestate_no = () => {
//     let a=1
//     const handle_click=()=>{
//          a=a+1

//         console.log(a)

//     }
//   return (
//     <>
//          <p>{a}</p>
//          <button onClick={handle_click}>click</button>
//     </>
   
//   )
// }

// export default Basic_usestate_no




import React from "react";
import { useState } from "react";

const Basic_usestate_no = () => {
    const [value,setValue]=useState('')
        let a=1
        const handle_click=()=>{
             setValue(1)
            console.log(a)
    
        }
      return (
        <>
             <p>{value}</p>
             <button onClick={handle_click}>click</button>
        </>
       
      )
    }
    
    export default Basic_usestate_no
    


// import React from "react";
// import { useState } from "react";

// const Basic_usestate_no = () => {
//     const [value,setValue]=useState(0)
//         const handle_click=()=>{
//              setValue(value+1)
//              console.log(value+1)
//         }
//       return (
//         <>
//              <p>{value}</p>
//              <button onClick={handle_click}>click</button>
//              <button onClick={()=>{setValue(value+1);console.log(value+1)}}>click</button>

//         </>
       
//       )
//     }
    
//     export default Basic_usestate_no
    