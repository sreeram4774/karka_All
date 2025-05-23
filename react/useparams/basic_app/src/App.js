import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./component/Basic"; // Assuming this component is defined in ./component/Basic

const App = () => {
  return (
    <>
      <Router>
        <div>
          <h1>Welcome</h1>
          <Routes>
            <Route path="/about/:id" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
