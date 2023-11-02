import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Gnb from "./header/Gnb";
import { Container } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <Container ml="auto" mr="auto" maxW="1600px" width="75%">
        <Gnb />
        {children}
      </Container>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
`;

export default Layout;
