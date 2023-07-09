import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import NumberPicker from "react-widgets/NumberPicker";

function Timer() {

}

function App() {

  const [seconds, setSeconds] = useState(0);

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
          if you make <d5>$51,000</d5> a year thats
        </p>
        <p>
         <d5> ${(seconds/ 86400) * 139.7260273973}</d5>
        </p>
        <p>
          <d6>(after NYC taxes:
        <d5>${((seconds/ 86400) * 139.7260273973) * 0.77}</d5>)</d6>
        </p>
        <p>
        if you lived in Burundi and made <d5>$216</d5> per year
          </p>
          <p>
            that would have been 
          </p>
          <p>
          <d5>${(seconds/ 86400) * 0.03}</d5>
          </p>
      </header>
    </div>
  );
}


export default App;
