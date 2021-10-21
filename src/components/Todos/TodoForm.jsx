import { useRef } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todos";

import { Input, Button, HStack, useToast } from "@chakra-ui/react";

function TodoForm() {
  const dispatch = useDispatch();

  const titleRef = useRef();

  const toast = useToast();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    if (!title) {
      toast({
        title: "No conent!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    dispatch(
      addTodo({
        id: nanoid(),
        title,
      })
    );
    titleRef.current.value = "";
  };

  return (
    <form onSubmit={addTodoHandler}>
      <HStack mt="4">
        <Input ref={titleRef} variant="filled" placeholder="Add Todo Title" />
        <Button type="submit" colorScheme="teal" px="8">
          Save
        </Button>
      </HStack>
    </form>
  );
}

export default TodoForm;
