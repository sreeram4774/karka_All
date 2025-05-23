import React from 'react'
import {useState} from 'react'
const Usestate = () => {
        const [bgColor,setBgColor]=useState("red")
        const handle_click=()=>{
            setBgColor(bgColor==="red" ? "blue":"red");

        }
  return (
        <>
            <p style={{height:'100px',background:bgColor,padding:'0px',margin:'0px'}}></p>
            <button onClick={handle_click}>click</button>
        </>
  )
}

export default Usestate