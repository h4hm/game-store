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
    <Card width={"200px"}>
      <CardBody>
        <Image src={ItemThumb} alt="Prehistoric_Kingdom" />
        <Stack>
          <Text fontSize={"14px"}>기본게임</Text>
          <Text as={"strong"} fontSize={"16px"}>
            Prehistoric Kingdom
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex>
          <DiscountBadge />
          <Text>W11,440</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default VerBox;
