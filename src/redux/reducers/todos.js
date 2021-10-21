import { ADD_TODO, REMOVE_TODO } from "../actions/todos";

export default function todos(state = { counter: 0 }, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
      };
    case REMOVE_TODO:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
