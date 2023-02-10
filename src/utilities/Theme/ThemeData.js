const ThemeData = (themeMode) => {
  let backGround, backGroundI, text, textI;
  switch (themeMode) {
    case "light":
      backGround = "bg-blue-400";
      backGroundI = "bg-blue-500";
      text = "font-gray-500";
      textI = "font-gray-600";
      break;
  }
  return { backGround, backGroundI, text, textI };
};

export default ThemeData;
