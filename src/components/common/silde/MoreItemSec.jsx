import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import Moreitem1 from "../../../assets/images/item/free.jpg";

const MoreItemSec = () => {
  return (
    <HStack w={"100%"} pt={"25px"} gap={7}>
      <Card width={"33%"} h={"300px"} variant={"unstyled"}>
        <CardBody p={"0px"}>
          <Image
            src={Moreitem1}
            alt="Moreitem1"
            borderRadius={"15px"}
            position={"relative"}
            w={"100%"}
            h={"300px"}
            objectFit="cover"
          />
          <Stack pt={"10px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p={"10px 0px"}>
          <Flex gap={3}>
            <Text>W11,440</Text>
          </Flex>
        </CardFooter>
      </Card>
      <Card width={"33%"} h={"300px"} variant={"unstyled"}>
        <CardBody p={"0px"}>
          <Image
            src={Moreitem1}
            alt="Moreitem1"
            borderRadius={"15px"}
            position={"relative"}
            w={"100%"}
            h={"100%"}
            objectFit="cover"
          />
          <Stack pt={"10px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p={"10px 0px"}>
          <Flex gap={3}>
            <Text>W11,440</Text>
          </Flex>
        </CardFooter>
      </Card>
      <Card width={"33%"} h={"300px"} variant={"unstyled"}>
        <CardBody p={"0px"}>
          <Image
            src={Moreitem1}
            alt="Moreitem1"
            borderRadius={"15px"}
            position={"relative"}
            w={"100%"}
            h={"100%"}
            objectFit="cover"
          />
          <Stack pt={"10px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
        <CardFooter p={"10px 0px"}>
          <Flex gap={3}>
            <Text>W11,440</Text>
          </Flex>
        </CardFooter>
      </Card>
    </HStack>
  );
};

export default MoreItemSec;
