import Layout from "../components/layout/Layout";
import MainSlide from "../components/common/silde/Mainslide";
import { VStack } from "@chakra-ui/react";
import ItemSlide from "../components/common/silde/ItemSlide";
import HorBox from "../components/common/itembox/HorBox";
import BigBox from "../components/common/itembox/BigBox";

const Home = () => {
  return (
    <Layout>
      <VStack spacing="60px">
        <MainSlide />
        <ItemSlide />
        <HorBox />
        <BigBox />
      </VStack>
    </Layout>
  );
};

export default Home;
