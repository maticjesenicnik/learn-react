import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const isVisible = useSelector(state => state.isVisible);
  const dispatch = useDispatch();

  const incrementHandler = amount => {
    dispatch({ type: "increment", amount });
  };

  const decrementHandler = amount => {
    dispatch({ type: "decrement", amount });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <button onClick={() => decrementHandler(5)}>Decrement by 5</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
