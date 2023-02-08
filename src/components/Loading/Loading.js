import { Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 z-50 bg-slate-500 flex items-center justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <Spinner aria-label="Extra large spinner example" size="xl" />
        Please Wait...
      </div>
    </div>
  );
};

export default Loading;
