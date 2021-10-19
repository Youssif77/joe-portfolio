import { Box, Image, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <Link to={`product/${props.product.id}`}>
      <Box
        maxW="sm"
        m="20px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        display="inline-block"
      >
        <Image src={props.product.image} alt={props.product.title} />
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
              {props.product.category}
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.product.title}
          </Box>
          <Box>
            {props.product.price}
            <Box as="span" color="gray.600" fontSize="sm">
              $
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default ProductItem;
