import { Box, Flex, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
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
        <Input placeholder="스토어 검색" width="auto" />
        <ListStyled gap={5}>
          <ListItem className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">탐색</Link>
          </ListItem>
          <ListItem className={location.pathname === "/" ? "active" : ""}>
            <Link to="/gamepromo">찾아보기</Link>
          </ListItem>
          <ListItem className={location.pathname === "/" ? "active" : ""}>
            <Link to="/news">새소식</Link>
          </ListItem>
        </ListStyled>
      </Flex>
    </Box>
  );
};

const ListStyled = styled(UnorderedList)`
  display: flex;
`;

export default Gnb;
