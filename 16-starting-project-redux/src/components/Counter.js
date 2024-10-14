import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const isVisible = useSelector(state => state.counter.isVisible);
  const dispatch = useDispatch();

  const incrementHandler = amount => {
    dispatch(counterActions.increment(amount));
  };

  const decrementHandler = amount => {
    dispatch(counterActions.decrement(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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
