const ThemeData = (themeMode) => {
  let background, backgroundI, text, textI, hoverText;
  switch (themeMode) {
    case "light":
      background = "bg-blue-400";
      backgroundI = "bg-blue-500";
      text = "text-gray-600";
      textI = "text-gray-700";
      hoverText = "hover:text-gray-900";
      break;
    case "dark":
    default:
      background = "bg-gray-700";
      backgroundI = "bg-gray-800";
      text = "text-blue-500";
      textI = "text-blue-600";
      hoverText = "hover:text-blue-400";
      break;
  }
  return { background, backgroundI, text, textI, hoverText };
};

export default ThemeData;
