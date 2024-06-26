import React, { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Error");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? "dark" : 'light'));
    };
    const value = { theme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>
                {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext;