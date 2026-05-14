import { useReducer, useRef, useEffect } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

function SmartCounter() {
  // Load saved value from localStorage
  const savedCount = Number(localStorage.getItem("count")) || 0;

  const [count, dispatch] = useReducer(reducer, savedCount);

  // useRef for input focus
  const inputRef = useRef(null);

  // Save count whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Smart Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Click focus button"
      />

      <br /><br />

      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default SmartCounter;