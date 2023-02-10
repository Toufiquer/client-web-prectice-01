import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeDataContext } from "../../App";

const ProductsCart = () => {
  const { dataThemeData } = useContext(ThemeDataContext);
  const { border, text, hoverText } = dataThemeData;
  return (
    <div className={` ${border} ${text} p-4`}>
      <h2 className={` text-center text-2xl font-thin`}>Products Cart</h2>
      <div className={`p-2 ${border} ${hoverText} mt-4 cursor-pointer`}>
        <Link to="/products/addProduct"> Add New Product ++</Link>
      </div>
    </div>
  );
};

export default ProductsCart;
