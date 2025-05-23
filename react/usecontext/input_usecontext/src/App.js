import React, { useState } from 'react'
import MyContext from './component/Context'
import Main from './component/Main'
import Show from './component/Show'

const App = () => {
  const [values, setValue] = useState("")

  const receive = (value) => {
    setValue(value)
  }

  return (
    <MyContext.Provider value={values}>
      <Main parent={receive} />
      <Show />
    </MyContext.Provider>
  )
}

export default App
