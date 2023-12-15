import { useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const SetCounter = () => {
  const dispatch = useDispatch();
  const [enteredCount, setEnteredCount] = useState(0);

  const handleEnteredCountChange = (event) => {
    setEnteredCount(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(counterActions.set(enteredCount));
  };

  return (
    <div>
      <input
        type="number"
        value={enteredCount}
        onChange={handleEnteredCountChange}
      />
      <button onClick={handleSubmit}>Set</button>
    </div>
  );
};

export default SetCounter;
