import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./component/User";
import Profile from "./component/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/User" element={<User/>}/>
      </Routes>
    </Router>
  );
};

export default App;
