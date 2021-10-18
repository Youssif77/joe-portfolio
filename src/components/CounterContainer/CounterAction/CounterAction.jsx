import classes from "./CounterAction.module.css";

const CounterAction = (props) => {
  return (
    <>
      <button
        className={`${classes.btn} ${classes["btn-increase"]}`}
        onClick={() => props.onChangeCounter((prevCounter) => ++prevCounter)}
      >
        Increase
      </button>
      <button
        className={`${classes.btn} ${classes["btn-decrease"]}`}
        onClick={() =>
          props.onChangeCounter((prevCounter) => {
            if (prevCounter) return --prevCounter;
            else return 0;
          })
        }
      >
        Decrease
      </button>
    </>
  );
};

export default CounterAction;
