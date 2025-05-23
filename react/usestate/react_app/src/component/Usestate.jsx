import { useState } from 'react';

export default function UseState() {

    const [name, setName] = useState("Click to change text");

    const handle_click = () => {
        setName("hello"); 
    };

    return (
        <>
            <p>count :{name}</p>
            <button onClick={handle_click}>Click</button>
        </>
    );
}
