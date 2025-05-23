// // import { useState } from 'react'


// // const State = (props) => {

// //     const [item, setItem] = useState(["apple", "orange", "kiwi"])
    
// //     const handle_click = () => {
// //             setItem([...item,...props.name])
// //     }

// //     return (
// //         <>
// //             <button onClick={handle_click}>Add Item</button>
// //             <ul>
// //                 {item.map((item,index)=>(
// //                     <li key={index}>{item}</li>
// //                 ))}
// //             </ul>
// //         </>

// //     )
// // }
// // export default State;




import { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  const addFruit = () => {
    setFruits([...fruits,"mango","kiwi"]);
  };

  return (
    <div>
      <h2>Fruits List:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Mango</button>
    </div>
  );
};

export default Fruits;



// import { useState } from "react";

// const Fruits = () => {
//   const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);
//   const [index, setIndex] = useState(0); 
//   const newFruits = ["Mango", "Kiwi"]; 

//   const addFruit = () => {
//     if (index < newFruits.length) {
//       setFruits([...fruits, newFruits[index]]);
//       setIndex(index + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Fruits List:</h2>
//       <ul>
//         {fruits.map((fruit, i) => (
//           <li key={i}>{fruit}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add Next Fruit</button>
//     </div>
//   );
// };

// export default Fruits;
