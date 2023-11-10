import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import ItemThumb from "../../../assets/images/item/private-division-dark.jpg";
import ItemThumb2 from "../../../assets/images/item/fortnite-big-dark.jpg";
import ItemThumb3 from "../../../assets/images/item/nunu-hitem-dark.jpg";

const BigBox = () => {
  return (
    <Box w={"100%"}>
      <Link to="/">
        <Heading as={"h3"} fontSize={"24px"} fontWeight={600} display={"flex"}>
          기획전
          <BiChevronRight />
        </Heading>
      </Link>
      <HStack w={"100%"} gap={5} pt={"25px"} alignItems={"stretch"}>
        <Card width={"60%"} h={"600px"} variant={"unstyled"}>
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
              <Text as={"strong"} fontSize={"16px"}>
                Private Division 할인기획전
              </Text>
              <Text>
                아우터 월드, 커벌 스페이스 프로그램 2, Ancestors: The Humankind
                Odyssey 등 인기 게임에 대폭 할인을 받으세요.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <VStack width={"40%"} h={"600px"} gap={5}>
          <Box
            width={"100%"}
            h={"100%"}
            variant={"unstyled"}
            position={"relative"}
          >
            <Image
              src={ItemThumb3}
              alt="Prehistoric_Kingdom"
              borderRadius={"15px"}
              w={"100%"}
              h={"100%"}
              objectFit="cover"
            />
            <Stack
              position={"absolute"}
              bottom={"30px"}
              left={"30px"}
              color={"#fff"}
            >
              <Text as={"strong"} fontSize={"16px"}>
                Private Division 할인기획전
              </Text>
              <Text>
                아우터 월드, 커벌 스페이스 프로그램 2, Ancestors: The Humankind
                Odyssey 등 인기 게임에 대폭 할인을 받으세요.
              </Text>
            </Stack>
          </Box>
          <Box
            width={"100%"}
            h={"100%"}
            variant={"unstyled"}
            position={"relative"}
          >
            <Image
              src={ItemThumb2}
              alt="Prehistoric_Kingdom"
              borderRadius={"15px"}
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
              <Text as={"strong"} fontSize={"16px"}>
                Private Division 기획전
              </Text>
              <Text>
                아우터 월드, 커벌 스페이스 프로그램 2, Ancestors: The Humankind
                Odyssey 등 인기 게임에 대폭 할인을 받으세요.
              </Text>
            </Stack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default BigBox;
