import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
import { buttonTheme } from "./components/button";
// import { containerTheme } from './components/container';

const breakpoints = {
  sm: "428px",
  md: "744px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1920px",
};

const theme = extendTheme({
  breakpoints,
  components: {
    // Container: containerTheme,
    Text: textTheme,
    Table: tableTheme,
    Progress: progressTheme,
    Button: buttonTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: `'inter', sans-serif`,
        fontSize: "16px",
        fontWeight: "400",
        color: "#0a0a0a",
      },
      // styles for the `a`
      a: {
        color: "#0a0a0a",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    primary: "#4318FF",
    secondary_grey_700: "#707EAE",
    Secondary_Grey_600: "#A3AED0",
  },
});

export default theme;
