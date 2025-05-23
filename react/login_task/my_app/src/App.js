import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Input from './component/Input';
import Show from './component/Show'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Input />} />
      <Route path="/Show" element={<Show />} />
    </Routes>
    
  );
};

export default App;
