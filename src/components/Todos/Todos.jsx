import TodoForm from "./TodoForm";
import TodosList from "./TodosList";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function Todos() {
  const { colorMode, toggleColorMode } = useColorMode;
  console.log(colorMode);
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,teal.500,teal.300,blue.500)"
        bgClip="text"
      >
        TODOSLIST
      </Heading>
      <TodosList />
      <TodoForm />
    </VStack>
  );
}

export default Todos;
