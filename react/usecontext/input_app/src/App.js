import React, { useState } from 'react'
import Main from './component/Main'
import Show from './component/Show'



const App = () => {
  const [values,setValues]=useState("")

  const receive=(value)=>{
    setValues(value)
  }
  return (
    <>
      <Main parent={receive}/>
      <Show name={values}/>
    </>
  )
}

export default App