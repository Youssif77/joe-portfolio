import React, { useState } from "react";
import Counter from "./Counter/Counter";
import CounterAction from "./CounterAction/CounterAction";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter currentCounter={counter} />
      <CounterAction onChangeCounter={setCounter} />
    </>
  );
};

export default CounterContainer;
