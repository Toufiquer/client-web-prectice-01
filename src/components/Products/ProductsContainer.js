import React, { useContext } from "react";
import { ThemeDataContext } from "../../App";
import Product from "./Product";

const ProductsContainer = ({ products, setProducts, deleteOne }) => {
  const { dataThemeData } = useContext(ThemeDataContext);
  const { border, text } = dataThemeData;
  return (
    <div className={` ${border} p-4 ${text}`}>
      <h2 className={` text-center text-xl font-thin`}>Products Container</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product} deleteOne={deleteOne} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
