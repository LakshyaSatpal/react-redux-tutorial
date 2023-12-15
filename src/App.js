import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "./store/counter-slice";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(counterActions.increase());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(counterActions.decrease());
  }, [dispatch]);

  return (
    <div>
      <Counter counter={counter} />
      <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
      <SetCounter />
    </div>
  );
}

export default App;
