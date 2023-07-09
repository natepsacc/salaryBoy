import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function Timer() {

}

function App() {

  const [seconds, setSeconds] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const intervalId = setInterval(() => {
      const delta = Date.now() - start;
      const elapsedSeconds = (Math.floor(delta / 1000) );
      setSeconds(elapsedSeconds);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleIncrement = () => {
    setAmount(amount + 10000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>you have spent</p>
        <p>
          {seconds / 86400}% ({seconds} seconds)
        </p>
        <p>
          of your day here.
        </p>
        <p>
          if you make <d5>${amount}</d5> a year thats
        </p>
        <button onClick={handleIncrement}>+$10,000</button>

        <p>
         <d5> ${(seconds/ 86400) * (amount / 365)}</d5>
        </p>

        <p>
          <d6>(after NYC taxes:
        <d5>${((seconds/ 86400) * (amount / 365)) * 0.77}</d5>)</d6>
        </p>
        

      </header>
    </div>
  );
}


export default App;
