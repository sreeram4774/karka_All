import React from 'react'
import { useState } from 'react'

function Usestate (){

  const [count,setcount]=useState(0)

  const handle_click = ()=>{
      setcount(setcount=>setcount+1)
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handle_click}>Click</button>
    </>
  )
}

export default Usestate;