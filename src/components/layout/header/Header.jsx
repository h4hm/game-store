import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import Gnb from "./Gnb";
import styled from "styled-components";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HeadWrap isToggled={isToggled}>
      <Heading as={"h1"}>Logo</Heading>
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <Icon as={!isToggled ? HamburgerIcon : CloseIcon} />
      </div>
      <Gnb />
    </HeadWrap>
  );
}

const HeadWrap = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle {
    display: none;
  }
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    .toggle {
      display: block;
    }
  }
`;

export default Header;
