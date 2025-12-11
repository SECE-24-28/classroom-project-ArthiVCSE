import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter App</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;