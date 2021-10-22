import { VStack, Heading, Button } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import FormArray from "./FormArray";
import FormikField from "./FormikField";

const Register = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    active: false,
    gender: "male",
    hoppies: [""],
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    userName: yup.string().required("UserName field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email field is required"),
    password: yup.string().required("Password field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    gender: yup.string(),
  });

  return (
    <VStack bgColor="teal.100" w="2xl" mx="auto" mt="4" borderRadius="lg">
      <Heading>Formik Components</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div style={{ padding: 20 }}>
                <FormikField label="User Name" name="userName" type="text" />
                <FormikField label="Email" name="email" type="email" />
                <FormikField label="Password" name="password" type="password" />
                <FormikField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <FormikField label="Active" name="active" type="checkbox" />
                <div id="my-radio-group">Gender</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="gender" value="male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="female" />
                    Female
                  </label>
                </div>
                <FormArray name="hoppies" arrayValue={formik.values.hoppies} />
                <Button type="submit" colorScheme="teal" mt="4">
                  submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </VStack>
  );
};
export default Register;
