import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered or count changed!");
    return () => {
      console.log("Cleaning up");
    };
  }, [count]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrrement</button>
    </div>
  );
}

export default Counter;
