import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
// import Show from './component/Show'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Show" element={<Show />} /> */}
    </Routes>
  );
};

export default App;
