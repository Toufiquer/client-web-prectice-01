import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeDataContext } from "../../App";

const Product = ({ product, deleteOne }) => {
  console.log(product, " => Line No: 7");
  const [toggle, setToggle] = useState(false);
  //   console.log(product, " => Line No: 5");
  const { dataThemeData } = useContext(ThemeDataContext);
  const { productName, productDescription } = product?.data;
  const onClick = () => {
    setToggle(!toggle);
  };
  const onClose = () => {
    setToggle(!toggle);
  };
  const accept = () => {
    setToggle(!toggle);
    deleteOne(product._id);
  };
  const { border, button, backGround } = dataThemeData;
  return (
    <div className={` ${border} p-2`}>
      <h2 className={` text-2xl text-center font-thin underline`}>
        Name: {productName}
      </h2>
      <h2 className={` text-justify`}>Description: {productDescription}</h2>
      <div className="flex gap-2 mt-4">
        {/* <React.Fragment> */}
        <Button
          className={`${button} flex item-center justify-center px-2 py-1 font-semibold bg-red-600 border-red-700 text-black hover:bg-red-700 hover:text-white hover:border-red-700`}
          onClick={onClick}
        >
          Remove
        </Button>
        <Modal show={toggle} onClose={onClose} className={` ${backGround}`}>
          <Modal.Header>Are You sure?</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="flex gap-4">
              <Button
                className={`${button} flex item-center justify-center px-2 py-1 font-semibold bg-red-600 border-red-700 text-black hover:bg-red-700 hover:text-white hover:border-red-700`}
                onClick={accept}
              >
                Delete
              </Button>
              <Button
                className={`${button} flex item-center justify-center px-2 py-1 font-semibold bg-gray-600 border-gray-700`}
                color="gray"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
        {/* </React.Fragment> */}
        <Link
          to={`/products/updateProduct/${product._id}`}
          className={`${button} flex items-center justify-center px-2 py-1 font-semibold bg-green-600 border-green-700 text-black hover:bg-green-700 hover:text-white hover:border-green-700`}
        >
          Update
        </Link>
      </div>
    </div>
  );
};

export default Product;
