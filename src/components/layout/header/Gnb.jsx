import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const Gnb = () => {
  const location = useLocation();

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="left"
        wrap="wrap"
        gap={3}
        w="100%"
        h="100px"
      >
        <InputGroup width="auto">
          <Input
            placeholder="스토어 검색"
            color={"white"}
            variant={"filled"}
            borderRadius={"20px"}
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />
          <InputRightElement>
            <BiSearch color={"white"} size={"20px"} />
          </InputRightElement>
        </InputGroup>
        <ListStyled
          gap={6}
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight={400}
          color={"white"}
        >
          <ListItem className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">탐색</Link>
          </ListItem>
          <ListItem
            className={location.pathname === "/gamepromo" ? "active" : ""}
          >
            <Link to="/gamepromo">찾아보기</Link>
          </ListItem>
          <ListItem className={location.pathname === "/news" ? "active" : ""}>
            <Link to="/news">새소식</Link>
          </ListItem>
        </ListStyled>
      </Flex>
    </Box>
  );
};

const ListStyled = styled(UnorderedList)`
  display: flex;
  li.active {
    color: var(--primary);
    font-weight: 800;
  }
  a:hover {
    color: var(--primary);
    font-weight: 800;
    transition: all 200ms ease-in-out;
  }
`;

export default Gnb;
