import "./App.css";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Support from "./pages/Support";
import Community from "./pages/Community";
import News from "./pages/News";
import GamePromo from "./pages/Gamepromo";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/community" element={<Community />} />
        <Route path="/gamepromo" element={<GamePromo />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
