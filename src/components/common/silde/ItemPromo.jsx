import { Box, Flex, Image } from "@chakra-ui/react";
import ItemPromo1 from "../../../assets/images/item/ghost-hitem.jpg";

const ItemPromo = () => {
  return (
    <Flex alignItems={"center"}>
      <Image src={ItemPromo1} alt="promo image" />
      <Box />
    </Flex>
  );
};

export default ItemPromo;
