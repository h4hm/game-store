import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
// import Gnb from "./Gnb";
import { CloseIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import { RiGlobalLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../assets/images/logo4.svg";
import Buttons from "../../common/button/Buttons";

// import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Flex
      toggle={toggle}
      alignItems={"center"}
      gap={10}
      h={"60px"}
      p={"20px 24px"}
    >
      <Heading as={"h1"}>
        <Image src={logo} boxSize="30px" alt="로고이미지" />
      </Heading>
      <StackNav as={"nav"} toggle={toggle}>
        <List
          display={"flex"}
          alignItems={"center"}
          gap={6}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight={400}
          color={"white"}
        >
          <ListItem className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">스토어</Link>
          </ListItem>
          <ListItem
            className={location.pathname === "/support" ? "active" : ""}
          >
            <Link to="/support">고객센터</Link>
          </ListItem>
          <ListItem
            className={location.pathname === "/community" ? "active" : ""}
          >
            <Link to="/community">커뮤니티</Link>
          </ListItem>
        </List>
        <Box
          className="tool-box"
          display={"flex"}
          alignItems={"center"}
          gap={5}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<RiGlobalLine size={"24px"} />}
              variant="ghost"
            />
            <MenuList>
              <MenuOptionGroup defaultValue="asc" type="radio">
                <MenuItemOption value="asc">한국어</MenuItemOption>
                <MenuItemOption value="desc">English</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <IconButton
            aria-label="User"
            variant="ghost"
            icon={<BiUser size={"24px"} />}
          />
          <Buttons styleType="download">다운로드</Buttons>
        </Box>
        <Box className="toggle-menu" onClick={handToggle}>
          <Icon as={toggle ? CloseIcon : HamburgerIcon} />
        </Box>
      </StackNav>
    </Flex>
  );
};

const StackNav = styled(HStack)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  .toggle-menu {
    display: none;
  }
  li.active {
    color: var(--primary);
    font-weight: 800;
  }
  a:hover {
    color: var(--primary);
    font-weight: 800;
    transition: all 200ms ease-in-out;
  }

  @media screen and (max-width: 768px) {
    ul {
      display: ${(props) => (props.toggle ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      flex-direction: column;
    }
    .tool-box {
      display: ${(props) => (props.toggle ? "flex" : "none")};
    }
    li {
      margin: 1rem 0;
      padding: 0;
    }
    .toggle-menu {
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
    }
  }
`;

export default Header;
