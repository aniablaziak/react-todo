const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const themeLight = {
  background: gray,
  body: black,
  hoverBackground: black,
  hoverBody: gray
};

const themeDark = {
  background: black,
  body: white,
  hoverBackground: white,
  hoverBody: black
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
