export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

export function increaseCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decreaseCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export function resetCounter() {
  return {
    type: RESET_COUNTER,
  };
}
