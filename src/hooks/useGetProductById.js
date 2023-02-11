import axios from "axios";
import { useEffect, useState } from "react";

const useGetProductById = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/product/${id}`).then((res) => {
      const resProduct = res.data.cursor.data;
      resProduct._id = id;
      setProduct(resProduct);
    });
  }, [id]);
  return [product, setProduct];
};

export default useGetProductById;
