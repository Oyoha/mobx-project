import React from "react";

export const Counter = ({ count, decrement, increment, total }) => {
  return (
    <>
      <button onClick={() => increment(1)}>+</button>
      <span>{count}</span>
      <button onClick={() => decrement(1)}>-</button>
      <span>{total}</span>
    </>
  );
};
