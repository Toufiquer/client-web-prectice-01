import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import useGetProducts from "../../hooks/useGetProducts";
import ProductsCart from "./ProductsCart";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  const [products, setProducts] = useGetProducts();
  const deleteOne = (id) => {
    axios
      .delete("http://localhost:5000/removeProduct", {
        data: { productId: id },
      })
      .then((res) => {
        if (res.data.cursor.deletedCount === 1) {
          toast.success("Deleted Successfully", {
            toastId: `id-${id}`,
          });
          setProducts(products.filter((product) => product._id !== id));
        }
      });
  };
  return (
    <div
      className={` grid grid-cols-1 md:grid-cols-[1fr_400px] gap-2 container mx-auto my-2`}
    >
      <ProductsContainer
        products={products}
        deleteOne={deleteOne}
      ></ProductsContainer>
      <ProductsCart></ProductsCart>
    </div>
  );
};

export default Products;
