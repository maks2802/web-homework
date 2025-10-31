import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const increment = () => {
    setResult((prev) => prev + 2);
  };

  const decrement = () => {
    setResult((prev) => prev - 2);
  };

  const multiply = () => {
    setResult((prev) => prev * 2);
  };

  const divide = () => {
    setResult((prev) => prev / 2);
  };

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
      <div>
        <button onClick={increment}>+ 2</button>
        <button onClick={decrement}>- 2</button>
        <button onClick={multiply}>* 2</button>
        <button onClick={divide}>/ 2</button>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Calculator;
