import React, { useContext } from "react";
import { ThemeDataContext } from "../../App";

const Home = () => {
  const { dataThemeData } = useContext(ThemeDataContext);

  const { text } = dataThemeData;
  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center text-6xl ${text}`}
    >
      Home Update.
    </div>
  );
};

export default Home;
