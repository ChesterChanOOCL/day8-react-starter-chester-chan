import React, { useState } from 'react';

const Counter = () => {
    const [size, setSize] = useState(0);
    const [input, setInput] = useState(0);
    const [counts, setCounts] = useState(Array(5).fill(0)); // Initialize counts array

    const handleInputChange = (e) => {
        setInput(parseInt(e.target.value, 10) || 0);
    };

    const handleReset = () => {
        if(input === size) return;
        if(input < 0 || input > 20 ){
            setCounts(Array(20).fill(0));
            setInput(20)
        }
        setCounts(Array(input).fill(0));
        setSize(input);
    };

    const incrementCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const decrementCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] -= 1;
        setCounts(newCounts);
    };

    return (
        <div>
            <div >
                <p>Size: {input}</p>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                />
                <button onClick={handleReset}>Reset</button>
            </div>
            {[...Array(size)].map((_, index) => (
                <div className="counterRow" key={index}>
                    <div>
                        <button onClick={() => incrementCount(index)}>+</button>
                    </div>
                    <span>{counts[index]}</span>
                    <button onClick={() => decrementCount(index)}>-</button>
                </div>
            ))}
        </div>
    );
};

export default Counter;