import React from 'react';

const CounterGroupGenerator = ({ input, handleInputChange, handleReset }) => {
    return (
        <div className="numberOfRow-controller">
            <p>Size: {input}</p>
            <input
                type="number"
                min={0}
                max={20}
                style={{ width: "100px" , height: "100px", fontSize: "50px"}}
                value={input}
                onChange={handleInputChange}
            />
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default CounterGroupGenerator;