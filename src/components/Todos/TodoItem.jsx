import { removeTodo } from "../../redux/actions/todos";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  const dispatch = useDispatch();
  const removeTodoHandler = (_) => {
    dispatch(removeTodo(props.todo.id));
  };

  return (
    <div>
      <li>{props.todo.title}</li>
      <button onClick={removeTodoHandler}>X</button>
    </div>
  );
}

export default TodoItem;
