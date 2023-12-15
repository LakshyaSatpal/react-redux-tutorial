import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function App() {
  const counter = useSelector((state) => state.counter);
  // const [count, setCount] = useState(0);

  // const handleIncrement = useCallback(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  // const handleDecrement = useCallback(() => {
  //   setCount((prev) => prev - 1);
  // }, []);

  // const handleSetCount = (newCount) => {
  //   setCount(newCount);
  // };

  return (
    <div>
      <Counter counter={counter} />
      {/* <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
      <SetCounter onSet={handleSetCount} /> */}
    </div>
  );
}

export default App;
