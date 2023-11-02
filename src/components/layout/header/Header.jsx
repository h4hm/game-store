import { Heading, Image } from "@chakra-ui/react";
// import Gnb from "./Gnb";
import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo3.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <HeadWrap toggle={toggle}>
      <Heading as={"h1"}>
        <Image src={logo} boxSize="30px" alt="로고이미지" />
      </Heading>
      <NavStyled toggle={toggle}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">스토어</Link>
          </li>
          <li className={location.pathname === "/support" ? "active" : ""}>
            <Link to="/support">고객센터</Link>
          </li>
          <li className={location.pathname === "/community" ? "active" : ""}>
            <Link to="/community">커뮤니티</Link>
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
  /* max-width: 1440px; */
  display: flex;
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
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
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
      position: absolute;
      top: 5px;
      right: 20px;
      z-index: 100;
    }
  }
`;

export default Header;
