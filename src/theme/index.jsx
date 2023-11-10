import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
import { buttonTheme } from "./components/button";
import { menuTheme } from "./components/menu";
import { inputTheme } from "./components/input";
import { cardTheme } from "./components/card";
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
    Text: textTheme,
    Table: tableTheme,
    Progress: progressTheme,
    Button: buttonTheme,
    Menu: menuTheme,
    Input: inputTheme,
    Card: cardTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: `'Pretendard', 'inter', sans-serif`,
        fontSize: "16px",
        fontWeight: "400",
        color: "#1D1D1D",
      },
      // styles for the `a`
      a: {
        color: "#1D1D1D",
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
    Primary: "#4F4CFF",
    Primary_grey: "#1D1D1D",
    Secondary_grey: "#6E6E6E",
    Third_grey: "#b9becb",
    Background_grey: "#f8f9fb",
  },
});

export default theme;
