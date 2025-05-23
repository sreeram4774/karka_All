import logo from './logo.svg';
import './App.css';
import { Props } from './component/Props';



function App() {
  const data=["subin","ganam","sree"]
  return(
    <Props item={data}/>
  );
}

export default App;
