import React, { useContext } from "react";
import { ThemeDataContext } from "../../App";

const ProductsContainer = () => {
  const { dataThemeData, setDataThemeData } = useContext(ThemeDataContext);
  const { border, text } = dataThemeData;
  return <div className={` ${border} p-4 ${text}`}>Products Container</div>;
};

export default ProductsContainer;
