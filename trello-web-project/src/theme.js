import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, red, teal } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "88px",
  },
  colorSchemes: {
    light: {
      palette: { primary: teal, secondary: deepOrange },
    },
    dark: {
      palette: { primary: cyan, secondary: orange },
    },
  },
  // ...other properties
});

export default theme;
