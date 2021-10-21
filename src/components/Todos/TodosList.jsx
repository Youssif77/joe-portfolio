import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Box, Heading, Flex } from "@chakra-ui/react";

function TodosList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>TODOSLIST</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
