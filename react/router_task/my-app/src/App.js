import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={One}/>
        <Route path="/Two" element={Two}/>
        <Route path="/Three" element={Three}/>
        <Route path="/Four" element={Four}/>
      </Routes>
    </Router>

   </>
  );
}

export default App;
