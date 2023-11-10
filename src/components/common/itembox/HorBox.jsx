import {
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Link,
  Heading,
  Box,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import DiscountBadge from "../tag/DiscountBadge";
import ItemThumb from "../../../assets/images/item/hogwart-hitem-sp.jpg";

const HorBox = () => {
  return (
    <Box w={"100%"}>
      <Link to="/">
        <Heading as={"h3"} fontSize={"24px"} fontWeight={600} display={"flex"}>
          오늘의 핫딜
          <BiChevronRight />
        </Heading>
      </Link>
      <HStack w={"100%"} pt={"25px"} gap={7}>
        <Card width={"33%"} h={"300px"} variant={"unstyled"}>
          <CardBody p={"0px"}>
            <Image
              src={ItemThumb}
              alt="Prehistoric_Kingdom"
              borderRadius={"15px"}
              position={"relative"}
              w={"100%"}
              h={"100%"}
              objectFit="cover"
            />
            <Stack
              pt={"10px"}
              position={"absolute"}
              bottom={"30px"}
              left={"30px"}
              color={"#fff"}
            >
              <Text fontSize={"14px"}>이번주의 딜</Text>
              <Text as={"strong"} fontSize={"16px"}>
                Prehistoric Kingdom
              </Text>
              <Flex gap={3}>
                <DiscountBadge />
                <Text>W11,440</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Card width={"33%"} h={"300px"} variant={"unstyled"}>
          <CardBody p={"0px"}>
            <Image
              src={ItemThumb}
              alt="Prehistoric_Kingdom"
              borderRadius={"15px"}
              position={"relative"}
              w={"100%"}
              h={"100%"}
              objectFit="cover"
            />
            <Stack
              pt={"10px"}
              position={"absolute"}
              bottom={"30px"}
              left={"30px"}
              color={"#fff"}
            >
              <Text fontSize={"14px"}>이번주의 딜</Text>
              <Text as={"strong"} fontSize={"16px"}>
                Prehistoric Kingdom
              </Text>
              <Flex gap={3}>
                <DiscountBadge />
                <Text>W11,440</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Card width={"33%"} h={"300px"} variant={"unstyled"}>
          <CardBody p={"0px"}>
            <Image
              src={ItemThumb}
              alt="Prehistoric_Kingdom"
              borderRadius={"15px"}
              position={"relative"}
              w={"100%"}
              h={"100%"}
              objectFit="cover"
            />
            <Stack
              pt={"10px"}
              position={"absolute"}
              bottom={"30px"}
              left={"30px"}
              color={"#fff"}
            >
              <Text fontSize={"14px"}>이번주의 딜</Text>
              <Text as={"strong"} fontSize={"16px"}>
                Prehistoric Kingdom
              </Text>
              <Flex gap={3}>
                <DiscountBadge />
                <Text>W11,440</Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
      </HStack>
    </Box>
  );
};

export default HorBox;
