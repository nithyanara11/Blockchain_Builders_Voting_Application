import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';




function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clickd ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;

