import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ThemeDataContext } from "../../App";
const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            className={` p-2 bg-transparent ${border}`}
            defaultValue="Product Name"
            {...register("productName")}
          />
          <textarea
            className={` p-2 bg-transparent ${border}`}
            defaultValue="Product Description..."
            {...register("productDescription")}
          />
          <input className={`${button}`} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
