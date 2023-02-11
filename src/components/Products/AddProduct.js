import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ThemeDataContext } from "../../App";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/addProduct", { data })
      .then(function (response) {
        if (response?.data?.cursor?.insertedId) {
          toast.success("Product Added Successfully", {
            toastId: "success-toast-add-product",
          });
        }
      })
      .catch(function (error) {
        toast.error(error, {
          toastId: "error-toast-add-product",
        });
      });
  };
  const { dataThemeData } = useContext(ThemeDataContext);
  const { border, text, button } = dataThemeData;
  return (
    <div>
      <div
        className={`w-[600px] mx-auto ${border} ${text} p-4 flex flex-col mt-4`}
      >
        <h2 className={` text-2xl font-thin text-center mb-4`}>Add Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={` flex flex-col gap-2`}
        >
          <input
            className={` p-2 bg-transparent ${border} focus:outline-none`}
            placeholder="Product Name"
            defaultValue=""
            {...register("productName")}
          />
          <textarea
            className={` p-2 bg-transparent ${border} min-h-[240px]`}
            placeholder="Product Description..."
            defaultValue=""
            {...register("productDescription")}
          />
          <input className={`${button}`} type="submit" value={"Add Product"} />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
