import React from "react";
import { useCounter, } from "./CounterContext";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter();
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Counter: {count}</h1>
                <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
                <button onClick={decrement} style={{ marginRight: '10px' }}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
};

export default Counter;

