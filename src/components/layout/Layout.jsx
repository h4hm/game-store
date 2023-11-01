import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Gnb from "./header/Gnb";

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Gnb />
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
`;

export default Layout;
