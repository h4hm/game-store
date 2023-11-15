import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiAddCircleLine } from "react-icons/ri";
import styled from "styled-components";

const SlideContent = (props) => {
  return (
    <Box w={"100%"} h={"100%"} position={"relative"}>
      <Img
        src={props.slidedata.src}
        boxSize="100%"
        objectFit="cover"
        objectPosition="center"
        alt={props.slidedata.alt}
        borderRadius={"38px"}
      />
      <VStack
        position={"absolute"}
        alignItems={"flex-start"}
        bottom={"15%"}
        left={"80px"}
        w={"400px"}
        spacing={8}
        zIndex={10}
        color={"#fff"}
      >
        <Img
          src={props.slidedata.contsrc}
          boxSize="75%"
          alt={props.slidedata.alt}
        />
        {/* <Box
          w={"100%"}
          style={{ backgroundImage: `url(${props.slidedata.contsrc})` }}
        ></Box> */}
        <Heading className="hidden" as={"h3"}>
          {props.slidedata.alt}
        </Heading>
        <Box spacing={3} textAlign={"left"}>
          <Text as={"span"}>지금 이용가능</Text>
          <Text mt={"10px"}>{props.slidedata.contxt}</Text>
        </Box>
        <Box spacing={3} textAlign={"left"}>
          <Text>출시가격</Text>
          <ButtonGroup mt={"10px"}>
            <Button>구매하기</Button>
            <Button
              variant="ghost"
              _hover={{ bg: "rgb(221, 221, 221, .5)" }}
              color={"white"}
            >
              <IconStyled size={"20px"} /> 위시리스트에 추가
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Box>
  );
};

const IconStyled = styled(RiAddCircleLine)`
  margin-right: 5px;
`;

export default SlideContent;
