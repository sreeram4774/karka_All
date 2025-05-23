import React, { useState } from 'react'

const Main = ({parent}) => {
    const [value,setValue]=useState("")

    const handle=(e)=>{
        setValue(e.target.value)
    }
    const handle_click=()=>{
        parent(value)
        setValue("")


    }

  return (
    <>
        <input type="text" value={value} onChange={handle} />
        <button onClick={handle_click}>Click</button>
    </>
  )
}

export default Main