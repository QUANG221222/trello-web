import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, red, teal } from "@mui/material/colors";
// import { colors } from "@mui/material";
// import { BorderColor } from "@mui/icons-material";

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    //   light: {
    //     palette: { primary: teal, secondary: deepOrange },
    //   },
    //   dark: {
    //     palette: { primary: cyan, secondary: orange },
    //   },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          borderWidth: "0.5px",
          // "&:hover": { borderWidth: "0.5px" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
          fontSize: "0.875rem",
          // ".MuiOutlinedInput-notchedOutline": {
          //   borderColor: theme.palette.primary.light,
          // },
          // "&:hover": {
          //   ".MuiOutlinedInput-notchedOutline": {
          //     borderColor: theme.palette.primary.main,
          //   },
          // },
          "& fieldset": {
            borderWidth: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWidth: "1px !important",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.light,
          fontSize: "0.875rem",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "4px",
            height: "4px",
          },
          "*::-webkit-scrollbar-thumb": {
            background: " #dcdde1",
            //   "linear-gradient(to right bottom,rgb(49, 150, 128),rgb(38, 157, 96))",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            background: "white",
            // "linear-gradient(to right bottom,rgb(35, 107, 92),rgb(25, 97, 60))",
            borderRadius: "8px",
          },
        },
      },
    },
  },
  // ...other properties
});

export default theme;
