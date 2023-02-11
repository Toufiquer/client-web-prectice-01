import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeDataContext } from "../../App";
import useGetProductById from "../../hooks/useGetProductById";
const UpdateProduct = () => {
  const { id } = useParams();
  const [product] = useGetProductById(id);
  console.log(product, " => Line No: 9");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data._id = id;
    console.log(data, " => Line No: 15");
    axios
      .put(`http://localhost:5000/updateProduct`, {
        data,
      })
      .then((res) => {
        const resProduct = res.data.cursor;
        if (resProduct?.modifiedCount === 1) {
          toast.success("Product Updated Successfully", {
            toastId: product._id,
          });
        }
        console.log(resProduct);
      });
  };

  const { dataThemeData } = useContext(ThemeDataContext);
  const { border, text, button } = dataThemeData;
  return (
    <div>
      <div
        className={`w-[600px] mx-auto ${border} ${text} p-4 flex flex-col mt-4`}
      >
        <h2 className={` text-2xl font-thin text-center mb-4`}>
          Update Product
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={` flex flex-col gap-2`}
        >
          <input
            className={` p-2 bg-transparent ${border} focus:outline-none`}
            defaultValue={product.productName}
            {...register("productName")}
          />
          <textarea
            className={` p-2 bg-transparent ${border} min-h-[240px]`}
            defaultValue={product.productDescription}
            {...register("productDescription")}
          />
          <input
            className={`${button}`}
            type="submit"
            value={"Update Product"}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
