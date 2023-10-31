import "./App.css";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import GamePromo from "./pages/Gamepromo";
import News from "./pages/News";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamepromo" element={<GamePromo />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
