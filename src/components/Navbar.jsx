import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";
import Login from "./Login/Login";

const MenuItems = (props) => (
  <Link to={props.to}>
    <Box mt={{ base: 4, md: 0 }} mr={6} display="block">
      {props.children}
    </Box>
  </Link>
);

const Navbar = (props) => {
  const [loginIsShown, setLoginIsShown] = useState(false);

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
      {loginIsShown && <Login onHideCart={setLoginIsShown.bind(null, false)} />}
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
        <MenuItems to="/register">Register</MenuItems>
        <Box
          onClick={setLoginIsShown.bind(null, true)}
          mt={{ base: 4, md: 0 }}
          mr={6}
          cursor="pointer"
          display="block"
        >
          Login
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
