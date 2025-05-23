import logo from './logo.svg';
import {Props} from './component/Props';

function App() {
  const grade=[{
        name:"sreeram",
        subject:"English",
        Marks:90,


  },
  {
    name:"Anand",
    subject:"English",
    Marks:85,


},
{
  name:"Sooraj",
  subject:"English",
  Marks:70,


},
{
  name:"Harshini",
  subject:"English",
  Marks:10,

}
]

  return (
    <>
      <Props data={grade}/>
    </>
    
  );
}

export default App;
