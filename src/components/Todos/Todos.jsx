import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, REMOVE_TODO } from "../../redux/actions/todos";
import TodosList from "./TodosList/TodosList";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.counter);
  const addTodoHandler = () => {
    dispatch({ type: ADD_TODO, todo: 2 });
  };

  return (
    <>
      <TodosList />
      <div onClick={addTodoHandler}>{todos}</div>
    </>
  );
}

export default Todos;
