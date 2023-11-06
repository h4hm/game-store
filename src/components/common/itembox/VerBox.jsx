import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import DiscountBadge from "../tag/DiscountBadge";
import ItemThumb from "../../../assets/images/Prehistoric_Kingdom_thumb.jpg";

const VerBox = () => {
  return (
    <Card width={"100%"}>
      <CardBody p={"0px"}>
        <Image
          src={ItemThumb}
          alt="Prehistoric_Kingdom"
          borderRadius={"15px"}
        />
        <Stack pt={"10px"}>
          <Text fontSize={"14px"}>기본게임</Text>
          <Text as={"strong"} fontSize={"16px"}>
            Prehistoric Kingdom
          </Text>
        </Stack>
      </CardBody>
      <CardFooter p={"15px 0px"}>
        <Flex gap={3}>
          <DiscountBadge />
          <Text>W11,440</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default VerBox;
