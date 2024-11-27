import React from 'react';

const CounterGroup = ({ size, counts, incrementCount, decrementCount,sum }) => {
    console.log(sum)
    return (
        <div>
            <div className="sum"> Sum: {sum} </div>
            {[...Array(size)].map((item, index) => (
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

export default CounterGroup;