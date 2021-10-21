import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "../../redux/actions/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const resetCounterHandler = () => {
    dispatch(resetCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(increaseCounter());
  };
  const decrementCounterHandler = () => {
    dispatch(decreaseCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementCounterHandler}>INCREMENT</button>
        <button onClick={decrementCounterHandler}>DECREMENT</button>
      </div>
      <button onClick={resetCounterHandler}>RESET</button>
    </main>
  );
};

export default Counter;
