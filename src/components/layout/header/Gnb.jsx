import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Gnb = () => {
  const location = useLocation();

  return (
    <NavStyled>
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
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  ul {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggled ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    li {
      margin: 1rem 0;
      padding: 0;
    }
  }
`;

export default Gnb;
