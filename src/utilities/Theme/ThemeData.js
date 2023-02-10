const ThemeData = (themeMode) => {
  let background, backgroundI, border, text, textI, hoverText, button;
  const borderStyle = "border border-solid ";
  const buttonStyle =
    "cursor-pointer border border-solid p-2 px-4 rounded w-[200px] mx-auto ";
  switch (themeMode) {
    case "light":
      background = "bg-blue-400";
      backgroundI = "bg-blue-500";
      border = `${borderStyle} border-gray-600`;
      text = "text-gray-600";
      textI = "text-gray-700";
      hoverText = "hover:text-gray-900";
      button = `${buttonStyle} ${borderStyle} border-gray-600 hover:bg-blue-300 duration-300 hover:border-blue-400 hover:text-gray-600`;
      break;
    case "dark":
    default:
      background = "bg-gray-700";
      backgroundI = "bg-gray-800";
      border = `${borderStyle} border-blue-600`;
      text = "text-blue-500";
      textI = "text-blue-600";
      hoverText = "hover:text-blue-400";
      button = `${buttonStyle} ${borderStyle} border-blue-600 hover:bg-blue-300 duration-300 hover:border-blue-400 hover:text-gray-600`;

      break;
  }
  return { background, backgroundI, border, text, textI, hoverText, button };
};

export default ThemeData;
