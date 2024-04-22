import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Counter from './Counter';
import { CounterProvider } from './CounterContext';

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    height: '100vh',
    width: '100vw'
  };

  return (
    <ThemeProvider>
      <CounterProvider>
        <div style={containerStyle}>
          <div>
            <h1>Theme Changer</h1>
            <ThemeToggle />
            <Counter />
          </div>
        </div>
      </CounterProvider>
    </ThemeProvider>
  );

}

export default App;
