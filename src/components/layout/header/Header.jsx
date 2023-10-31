import { Heading } from "@chakra-ui/react";
// import Gnb from "./Gnb";
import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <HeadWrap toggle={toggle}>
      <Heading as={"h1"}>Logo</Heading>
      <NavStyled toggle={toggle}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">탐색</Link>
          </li>
          <li className={location.pathname === "/gamepromo" ? "active" : ""}>
            <Link to="/gamepromo">찾아보기</Link>
          </li>
          <li className={location.pathname === "/news" ? "active" : ""}>
            <Link to="/news">새소식</Link>
          </li>
        </ul>
        <div className="toggle-menu" onClick={handToggle}>
          <Icon as={toggle ? CloseIcon : HamburgerIcon} />
        </div>
      </NavStyled>
    </HeadWrap>
  );
};

const HeadWrap = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #7c7c7c;

  @media screen and (max-width: 768px) {
  }
`;

const NavStyled = styled.nav`
  ul {
    display: flex;
  }
  .toggle-menu {
    display: none;
  }
  @media screen and (max-width: 768px) {
    ul {
      display: ${(props) => (props.toggle ? "flex" : "none")};
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
    }
    li {
      margin: 1rem 0;
      padding: 0;
    }
    .toggle-menu {
      display: block;
    }
  }
`;

export default Header;
