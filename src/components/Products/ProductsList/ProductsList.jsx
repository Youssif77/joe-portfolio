import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import Spinner from "../../UI/Spinner";

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
        <Spinner />
      ) : (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </>
  );
}

export default ProductsList;
