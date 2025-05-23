import './App.css';
import {Props} from './component/Props'


function App() {
  const object=[{name:"sree",
                 age:24},{
                  name:"achu",
                  age:20
                 }]
  return (
   <>
    <Props item={object}/>
   </>
  );
}

export default App;
