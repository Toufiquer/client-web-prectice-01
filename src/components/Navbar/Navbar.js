import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <div className={`min-h-[65px] px-5 text-2xl font-thin bg-slate-900 flex items-center`}>
      <div className="flex items-center justify-between w-full">
        <div className=" text-4xl">Toufiquer</div>
        <div className="">
          <ul className={`flex gap-2`}>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/logIn">LogIn</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
