import React, { useState, useEffect } from 'react';

const Autotype = () => {
    const words = ["Developer", "Designer", "Frontend Developer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const word = words[index];

        if (!isDeleting) {
            if (charIndex < word.length) {
                setTimeout(() => setText(word.slice(0, charIndex + 1)), 150);
                setTimeout(() => setCharIndex(charIndex + 1), 150);
            } else {
                setTimeout(() => setIsDeleting(true), 800); 
            }
        } else {
                if (charIndex > 0) {
                setTimeout(() => setText(word.slice(0, charIndex - 1)), 100);
                setTimeout(() => setCharIndex(charIndex - 1), 100);
            } else {
                setIsDeleting(false);
                setIndex((index + 1) % words.length); 
            }
        }
    }, [charIndex, isDeleting]);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(prev => !prev);
        }, 1000);
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <h1 style={{ fontSize: '2rem', fontFamily: 'Arial, sans-serif' }}>
            I'm a <span style={{ fontWeight: 'bold', color: 'blue' }}>{text}</span>
            <span style={{ color: 'black', opacity: blink ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>|</span>
        </h1>
    );
};

export default Autotype;
