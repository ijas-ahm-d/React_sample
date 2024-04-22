import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const headerStyle = {
        background: theme === 'light' ? '#f0f0f0' : "#333",
        color: theme === 'light' ? '#333' : '#f0f0f0',
        textAlign: 'center',
        padding: '20px'
    };
    return (

        <div style={headerStyle}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeToggle;
