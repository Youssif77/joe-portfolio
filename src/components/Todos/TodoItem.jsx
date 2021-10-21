import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/actions/todos";
import { Text, HStack, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoItem(props) {
  const dispatch = useDispatch();
  const removeTodoHandler = (_) => {
    dispatch(removeTodo(props.todo.id));
  };

  return (
    <HStack justify="space-between">
      <Text>{props.todo.title}</Text>
      <IconButton
        icon={<FaTrash />}
        isRound="true"
        onClick={removeTodoHandler}
      />
    </HStack>
  );
}

export default TodoItem;
