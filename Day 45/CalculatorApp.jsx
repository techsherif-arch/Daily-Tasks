import React, { useState } from "react";

function CalculatorApp() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div>
      <h2>Calculator App</h2>

      <input type="text" value={input} readOnly />

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>

      <div>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default CalculatorApp;