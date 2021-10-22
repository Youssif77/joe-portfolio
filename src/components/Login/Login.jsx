import { useFormik } from "formik";
import * as yup from "yup";
import {
  useToast,
  Button,
  VStack,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { FaTimesCircle } from "react-icons/fa";

import Model from "./../UI/Model";

export default function Login(props) {
  const toast = useToast();
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 4));
    props.onHideCart();
    toast({
      title: "Create A New User",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Model onClose={props.onHideCart}>
      <VStack>
        <IconButton
          icon={<FaTimesCircle />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={props.onHideCart}
        />
        <Heading fontSize="22px" as="h3" mb="8" fontWeight="normal" size="2xl">
          Welcome back!
        </Heading>
        <Heading fontSize="22px" as="h4" mb="16" fontWeight="bold" size="2xl">
          Sign in to your account
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email" style={{ display: "block" }}>
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
          <label htmlFor="password" style={{ display: "block" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
          <label htmlFor="rememberMe" style={{ display: "block" }}>
            remember me
          </label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            defaultChecked={formik.values.rememberMe}
            {...formik.getFieldProps("rememberMe")}
          />
          <Button colorScheme="teal" mt="8" display="block" type="submit">
            Sign In
          </Button>
        </form>
      </VStack>
    </Model>
  );
}
