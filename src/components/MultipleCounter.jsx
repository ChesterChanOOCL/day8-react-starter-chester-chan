import React, { useState } from 'react';
import CounterGroupGenerator from './CounterGroupGenerator';
import CounterGroup from './CounterGroup';

const MultipleCounter = () => {
    const [size, setSize] = useState(0);
    const [input, setInput] = useState(0);
    const [counts, setCounts] = useState(Array(5).fill(0)); // Initialize counts array
    const [sum, setSum] = useState(0);


    const handleInputChange = (e) => {
        if(e.target.value > 20 ){
            setInput(20);
        }
        else if(e.target.value < 0) {
            setInput(0);
        }
        else {
            setInput(parseInt(e.target.value));
        }
    };

    const handleReset = () => {
        if (input === size) return;
        if (input < 0 || input > 20) {
            setCounts(Array(20).fill(0));
            setInput(20);
        } else {
            setCounts(Array(input).fill(0));
        }
        setSize(parseInt(input));
        setSum(0);
    };

    const incrementCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
        setSum(counts.reduce((total, count) => total + count, 0));
    };

    const decrementCount = (index) => {
        const newCounts = [...counts];
        newCounts[index] -= 1;
        setCounts(newCounts);
        setSum(counts.reduce((total, count) => total + count, 0));
    };


    return (
        <div>
            <CounterGroupGenerator
                input={input}
                handleInputChange={handleInputChange}
                handleReset={handleReset}
            />
            <CounterGroup
                size={size}
                counts={counts}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                sum={sum}
            />
        </div>
    );
};

export default MultipleCounter;