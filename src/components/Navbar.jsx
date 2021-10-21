import { Link } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";

const MenuItems = (props) => (
  <Link to={props.to}>
    <Box mt={{ base: 4, md: 0 }} mr={6} display="block">
      {props.children}
    </Box>
  </Link>
);

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      padding="1.5rem"
      bg="gray.900"
      color="teal.300"
      borderBottom="1px solid black"
      {...props}
    >
      <Link to="/">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="-.1rem">
            JOE PORTFOLIO
          </Heading>
        </Flex>
      </Link>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        color="teal.300"
      >
        <MenuItems to="/counter">Counter</MenuItems>
        <MenuItems to="/products">Products</MenuItems>
        <MenuItems to="/todos">Todos</MenuItems>
      </Box>
    </Flex>
  );
};

export default Navbar;
