import React, { useState } from 'react';

export default function CounterContainerImproved() {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const onDecrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}
