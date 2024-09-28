/** @format */
"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>There are {users.length} Users</p>
      <button onClick={() => setCount((curr) => curr + 1)}>{count}</button>
    </div>
  );
}

export default Counter;
