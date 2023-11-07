import { Flex, Image, Text } from "@chakra-ui/react";

const SlideThumbs = (props) => {
  return (
    <Flex alignItems={"center"} w={"100%"} h={"100%"} gap={5} pl={"20px"}>
      <Image
        src={props.thumbdata.thumbnail}
        alt={props.thumbdata.name}
        h={"70%"}
        borderRadius={"10px"}
      />
      <Text>{props.thumbdata.name}</Text>
    </Flex>
  );
};

export default SlideThumbs;
