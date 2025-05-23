import React, { useState } from 'react'; 

export default function Usestate() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);  
    };
 
    const decrement = () => {
        setCount(count - 1); 
    };

    return (
        <>
            <button onClick={decrement}>-</button>
            <p>{count}</p> 
            <button onClick={increment}>+</button>
        </>
    );
}
