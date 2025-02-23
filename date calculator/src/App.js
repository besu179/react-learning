import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = (new Date());
  date.setDate(date.getDate() + count);
  
  

  return (
    <div className="App">
      <h1>days calculator</h1>
      <button onClick={() => setStep(step - 1)}>-</button> step: {step}{" "}
      <button onClick={() => setStep(step + 1)}>+</button> <br />
      <button >-</button> count: {count}{" "}
      <button onClick={() => setCount(step + count)}>+</button>
      <p>Today is {date.toDateString()}</p>
    </div>
  );
}
export default App;
