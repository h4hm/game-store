import { Card, CardBody, Image, Stack, HStack, Text } from "@chakra-ui/react";
import Moreitem1 from "../../../assets/images/item/free.jpg";

const MoreItemSec = () => {
  return (
    <HStack w={"100%"} gap={7} pb={"150px"}>
      <Card width={"33%"} h={"400px"} variant={"unstyled"}>
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
          <Stack pt={"10px"} h={"100px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card width={"33%"} h={"400px"} variant={"unstyled"}>
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
          <Stack pt={"10px"} h={"100px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card width={"33%"} h={"400px"} variant={"unstyled"}>
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
          <Stack pt={"10px"} h={"100px"}>
            <Text fontSize={"14px"}>기본게임</Text>
            <Text as={"strong"} fontSize={"16px"}>
              Prehistoric Kingdom
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </HStack>
  );
};

export default MoreItemSec;
