import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../utilities/firebase";
import Loading from "../Loading/Loading";
import CustomLink from "./CustomLink";
import { SparklesIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeDataContext, ThemeModeContext } from "../../App";
import ThemeData from "../../utilities/Theme/ThemeData";
const customIdError = "custom-id-for-error";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loading1, error1] = useSignOut(auth);
  const { dataThemeMode, setDataThemeMode } = useContext(ThemeModeContext);
  const { dataThemeData, setDataThemeData } = useContext(ThemeDataContext);
  if (loading || loading1) {
    return <Loading />;
  } else if (error || error1) {
    toast.error(error?.message || error1?.message, {
      toastId: customIdError,
    });
  }
  const handleTheme = () => {
    if (dataThemeMode === "dark") {
      const getThemeData = ThemeData("light");
      setDataThemeData(getThemeData);
      setDataThemeMode("light");
    } else if (dataThemeMode === "light") {
      const getThemeData = ThemeData("dark");
      setDataThemeData(getThemeData);
      setDataThemeMode("dark");
    }
  };
  const { backgroundI, textI, hoverText } = dataThemeData;

  return (
    <div
      className={`min-h-[65px] px-5 text-2xl font-thin ${backgroundI} ${textI} flex items-center`}
    >
      <div className="flex items-center justify-between w-full">
        <div className=" text-4xl">Toufiquer</div>
        <div className="flex gap-2">
          <ul className={`flex gap-2`}>
            <li className={`  ${hoverText}`}>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className={`  ${hoverText}`}>
              <CustomLink to="/private">Private</CustomLink>
            </li>
            <li className={`  ${hoverText}`}>
              <CustomLink to="/products">Products</CustomLink>
            </li>
            <li className={`  ${hoverText}`}>
              {!user ? (
                <CustomLink to="/logIn">LogIn</CustomLink>
              ) : (
                <CustomLink
                  onClick={() => signOut()}
                  className={`border-1 border-solid border-gray-400`}
                  to="/logIn"
                >
                  <span className={`w-[100px] text-xl font-thin`}>Log Out</span>
                </CustomLink>
              )}
            </li>
          </ul>
          <span
            onClick={handleTheme}
            className={` flex items-center justify-center cursor-pointer`}
          >
            {dataThemeMode === "dark" ? (
              <SunIcon className="h-6 w-6 "></SunIcon>
            ) : (
              <SparklesIcon className="h-6 w-6 "></SparklesIcon>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
