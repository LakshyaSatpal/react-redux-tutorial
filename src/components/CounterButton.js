import { memo } from "react";

const CounterButton = memo(function CounterButton({ children, onButtonClick }) {
  return <button onClick={onButtonClick}>{children}</button>;
});

export default CounterButton;
