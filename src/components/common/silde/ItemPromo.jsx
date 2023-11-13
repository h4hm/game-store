import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import { RiAddCircleLine } from "react-icons/ri";
import ItemPromo1 from "../../../assets/images/item/ghost-hitem.jpg";

const ItemPromo = () => {
  return (
    <Flex alignItems={"center"} w={"100%"} h={"500px"}>
      <Box w={"60%"}>
        <Image
          src={ItemPromo1}
          alt="promo image"
          w={"100%"}
          h={"500px"}
          objectFit={"cover"}
          borderRadius={"15px"}
        />
      </Box>
      <Box w={"40%"} pl={"65px"}>
        <Box spacing={3} textAlign={"left"}>
          <Heading as={"h3"} fontSize={"24px"}>
            Title
          </Heading>
          <Text mt={"10px"}>text</Text>
        </Box>
        <Box spacing={3} textAlign={"left"}>
          <Text>출시가격</Text>
          <ButtonGroup mt={"10px"}>
            <Button>구매하기</Button>
            <Button
              variant="ghost"
              _hover={{ bg: "rgb(221, 221, 221, .5)" }}
              color={"blackalpha"}
            >
              <RiAddCircleLine size={"20px"} /> 위시리스트에 추가
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Flex>
  );
};

export default ItemPromo;
