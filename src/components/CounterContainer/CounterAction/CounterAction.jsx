const CounterAction = (props) => {
  return (
    <>
      <button
        onClick={() => props.onChangeCounter((prevCounter) => ++prevCounter)}
      >
        Increase
      </button>
      <button
        onClick={() => props.onChangeCounter((prevCounter) => --prevCounter)}
      >
        Decrease
      </button>
    </>
  );
};

export default CounterAction;
