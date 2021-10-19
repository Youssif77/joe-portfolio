import React, { useState, useEffect } from "react";
import { Spinner, Box, Image, Badge } from "@chakra-ui/react";

function ProductDetails(props) {
  const [product, setproduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  }, []);

  return (
    <>
      {!product ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Box
          maxW="sm"
          m="20px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          display="inline-block"
        >
          <Image src={product.image} alt={product.title} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {product.category}
              </Box>
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.title}
            </Box>
            <Box>
              {product.price}
              <Box as="span" color="gray.600" fontSize="sm">
                $
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default ProductDetails;
