import { Button } from "flowbite-react";
import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../utilities/firebase";
import Loading from "../Loading/Loading";
import CustomLink from "./CustomLink";
import { SunIcon } from "@heroicons/react/24/solid";
const customIdError = "custom-id-for-error";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loading1, error1] = useSignOut(auth);
  if (loading || loading1) {
    return <Loading />;
  } else if (error || error1) {
    toast.error(error?.message || error1?.message, {
      toastId: customIdError,
    });
  }
  const handleTheme = () => {
    console.log("data", " => Line No: 21");
  };
  return (
    <div
      className={`min-h-[65px] px-5 text-2xl font-thin bg-slate-900 flex items-center`}
    >
      <div className="flex items-center justify-between w-full">
        <div className=" text-4xl">Toufiquer</div>
        <div className="flex gap-2">
          <ul className={`flex gap-2`}>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/private">Private</CustomLink>
            </li>
            <li>
              <CustomLink to="/products">Products</CustomLink>
            </li>
            <li>
              {!user ? (
                <CustomLink to="/logIn">LogIn</CustomLink>
              ) : (
                <Button
                  onClick={() => signOut()}
                  className={`border-1 border-solid border-gray-400`}
                  color="dark"
                >
                  <span className={`w-[100px] `}>Log Out</span>
                </Button>
              )}
            </li>
          </ul>
          <span
            onClick={handleTheme}
            className={` flex items-center justify-center cursor-pointer`}
          >
            <SunIcon className="h-6 w-6 text-blue-500 "></SunIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
