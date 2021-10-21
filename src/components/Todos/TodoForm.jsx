import { addTodo } from "../../redux/actions/todos";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import { Input, Button, ButtonGroup, Textarea } from "@chakra-ui/react";

function TodoForm() {
  const dispatch = useDispatch();

  const titleRef = useRef();
  const descriptionRef = useRef();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Date.now(),
        title: titleRef.current.value,
        description: descriptionRef.current.value || null,
      })
    );
    titleRef.current.value = descriptionRef.current.value = "";
  };

  return (
    <form id="email" onSubmit={addTodoHandler}>
      <Input ref={titleRef} variant="flushed" placeholder="Todo Title" />
      <Textarea ref={descriptionRef} placeholder="Descripe Todo" />
      <ButtonGroup variant="outline" spacing="6">
        <Button type="submit" colorScheme="blue">
          Save
        </Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </form>
  );
}

export default TodoForm;
