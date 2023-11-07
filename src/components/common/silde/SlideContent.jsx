import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";

const SlideContent = (props) => {
  return (
    <Box w={"100%"} h={"100%"} position={"relative"}>
      <Img
        src={props.slidedata.src}
        boxSize="100%"
        objectFit="cover"
        objectPosition="center"
        alt={props.slidedata.alt}
      />
      <Box
        position={"absolute"}
        bottom={"30%"}
        left={"50px"}
        zIndex={10}
        color={"#fff"}
      >
        <Img
          src={props.slidedata.contsrc}
          boxSize="55%"
          alt={props.slidedata.alt}
        />
        <Heading className="hidden" as={"h3"}>
          {props.slidedata.alt}
        </Heading>
        <Box textAlign={"left"} mt={"50px"}>
          <Text as={"span"} textAlign={"left"}>
            지금 이용가능
          </Text>
          <Text w={"400px"} mt={"10px"}>
            {props.slidedata.contxt}
          </Text>
        </Box>
        <VStack textAlign={"left"} alignItems={"left"}>
          <Text>출시가격</Text>
          <ButtonGroup>
            <Button>구매하기</Button>
            <Button>위시리스트에 추가</Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Box>
  );
};

export default SlideContent;
