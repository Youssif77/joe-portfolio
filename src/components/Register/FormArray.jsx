import React from "react";
import { Button, IconButton, HStack, VStack } from "@chakra-ui/react";
import { Field, FieldArray } from "formik";
import { FaPlus, FaMinus } from "react-icons/fa";

const FormArray = ({ name, arrayValue }) => (
  <FieldArray
    name={name}
    render={({ push, remove }) => (
      <VStack>
        {arrayValue && arrayValue.length > 0 ? (
          arrayValue.map((_, index) => (
            <HStack key={index}>
              <Field name={`${name}.${index}`} />
              <IconButton
                icon={<FaMinus />}
                size="sm"
                alignSelf="flex-end"
                onClick={remove.bind(null, index)}
              />
              <IconButton
                icon={<FaPlus />}
                size="sm"
                alignSelf="flex-end"
                onClick={push.bind(null, "")}
              />
            </HStack>
          ))
        ) : (
          <Button mt="4" onClick={push.bind(null, "")}>
            Add a Hoppy
          </Button>
        )}
      </VStack>
    )}
  />
);

export default FormArray;
