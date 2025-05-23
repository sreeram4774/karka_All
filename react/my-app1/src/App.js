import './App.css';
import { One } from './component/One';
import { Praticeprop } from './component/Praticeprop';
import { Prop1 } from './component/Prop1';
import { Prop2 } from './component/Prop2';
import { Arrayss } from './component/Arrayss';


function App() {
  const data = ["sree", "subin", "ganam"]
  return (
    <>
      {/* <One/> */}
      {/* <Prop1 name="sreeram" age="24"/> */}
      {/* <Prop2 phone="1232456789"/> */}
      <Praticeprop name="sree" age="24" phone="1234578" place="Nagercoil" />
      <Arrayss item={data} />
    </>
  );
}

export default App;
