import React, { useState } from 'react'
import One from './component/One'
import ThemeContext from './component/Theme'



const App = () => {
  const [theme, setTheme] = useState("light")

  const toogle = () => {
    setTheme((arr) => (arr === "light" ? "dark" : "light"))

  }


  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toogle}>Toogle</button>
      <One />
    </ThemeContext.Provider>
  )
}

export default App
