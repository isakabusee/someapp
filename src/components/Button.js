import React, { useState } from 'react';


const Button = () => {

    const [ value, setValue ] = useState(0);

    const increaseCount = () => {
        setValue(prevCount => prevCount + 1);
    } 

    const decreaseCount = () => {
        setValue(prevCount => prevCount - 1);
    }

    return(
        <div>
            <h4>Count is {value}</h4>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            <button onClick={() => setValue(0)}>reset</button>
        </div>
    )
}

export default Button;