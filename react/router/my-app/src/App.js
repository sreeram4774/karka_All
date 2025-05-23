import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import { Main } from './component/Main';
import { Four } from './component/Four';
import { Three } from './component/Three';
import { Two } from './component/Two';
import { One } from './component/One';
import { Header } from './component/Header';


function App() {
  return (
   <>
   <Router>
    <Header/>
   <Routes>
    {/* <Route path='/' element={<M/>}/> */}
    {/* <Route path="/Header" element={<Header/>}/> */}
    <Route path="/" element={<One/>}/>
    <Route path="/Two" element={<Two/>}/>
    <Route path="/Three" element={<Three/>}/>
    <Route path="/Four" element={<Four/>}/>
  </Routes>
   </Router>
</>
  );
}

export default App;
 