import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Autotype = () => {
    const [ text ] = useTypewriter({
        words: ['Developer', 'Designer', 'Frontend Developer'],
        loop: true, 
    });

    return (
        <>
            <h1 style={{ margin: '50px' }}>
                I'm a{' '}
                <span style={{ fontWeight: 'bold', color: 'red' }}>
                    {text}
                </span>
                <span style={{ color: 'green' }}>
                    <Cursor />
                </span>
            </h1>
        </>
    );
};

export default Autotype;
