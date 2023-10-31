import styled from "styled-components";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <main>
        <p>text</p>
      </main>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 100vh;
`;

export default Layout;
