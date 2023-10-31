import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <NavStyled className={toggle ? "navbar expanded" : "navbar"}>
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
  );
};

const NavStyled = styled.nav`
  ul {
    display: flex;
  }
  .toggle-menu {
    display: none;
  }
  @media screen and (max-width: 768px) {
    ul {
      display: none;
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

export default Gnb;
