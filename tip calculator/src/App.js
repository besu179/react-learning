import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");
  let tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function reset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }

  return (
    <div>
      <Price bill={bill} onSetBill={setBill} />
      <Tip percentage={percentage1} onsetPercentage={setPercentage1}>
        How did you like the service?
      </Tip>
      <Tip percentage={percentage2} onsetPercentage={setPercentage2}>
        How did your friend like the service?
      </Tip>
      {bill > 0 && (
        <>
          <DisplayPrice bill={bill} tip={tip} />

          <Reset onReset={reset} />
        </>
      )}
    </div>
  );
}

function Price({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>{" "}
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ children, percentage, onsetPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onsetPercentage(Number(e.target.value))}
      >
        <option value="0">not good(0%)</option>
        <option value="5">it was good(5%)</option>
        <option value="10">amazing(10%)</option>
        <option value="20">absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function DisplayPrice({ bill, tip }) {
  return (
    <h2>
      you will pay ${bill + tip} (${bill} bill + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}
