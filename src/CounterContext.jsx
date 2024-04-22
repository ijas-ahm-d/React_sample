import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("Error");
    }
    return context;
}

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <CounterContext.Provider value={{ count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext;
