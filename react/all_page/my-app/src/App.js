import React from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './component/Home'
// import {Main} from './component/Main'
// import {About} from './component/About'
// import {Portfolio} from './component/Portfolio'
// import {Contact} from './component/Contact'


const App = () => {
  return (
    <>
    <Home/>
      {/* <Router>
      <Main/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Router> */}
    </>
  )
}
export default App;
