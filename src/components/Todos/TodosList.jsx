import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

import { VStack, StackDivider, Badge } from "@chakra-ui/react";

function TodosList() {
  const todos = useSelector((state) => state.todos);

  if (!todos.length)
    return (
      <Badge colorScheme="blackAlpha" p="4" m="4" borderRadius="lg">
        NO TODOS
      </Badge>
    );

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
}

export default TodosList;
