import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>
        The button has been clicked <span className="span-text">{counter}</span>{" "}
        times
      </h1>
      <h2>click here to count the counter</h2>
      <button
        className="btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}
