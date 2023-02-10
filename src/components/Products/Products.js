import React from "react";
import ProductsCart from "./ProductsCart";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  return (
    <div
      className={` grid grid-cols-1 md:grid-cols-[1fr_400px] gap-2 container mx-auto my-2`}
    >
      <ProductsContainer></ProductsContainer>
      <ProductsCart></ProductsCart>
    </div>
  );
};

export default Products;
