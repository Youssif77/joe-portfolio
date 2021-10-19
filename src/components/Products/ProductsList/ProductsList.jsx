import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { Spinner } from "@chakra-ui/react";

function ProductsList() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, []);

  return (
    <>
      {!products.length ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </>
  );
}

export default ProductsList;
