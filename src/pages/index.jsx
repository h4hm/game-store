import Layout from "../components/layout/Layout";
import MainSlide from "../components/common/silde/Mainslide";
import { VStack } from "@chakra-ui/react";
import ItemSlide from "../components/common/silde/ItemSlide";
import HorBox from "../components/common/itembox/HorBox";
import BigBox from "../components/common/itembox/BigBox";
import ItemChart from "../components/common/charts/ItemChart";

const Home = () => {
  return (
    <Layout>
      <VStack spacing="60px">
        <MainSlide />
        <ItemSlide />
        <HorBox />
        <BigBox />
        <ItemChart />
      </VStack>
    </Layout>
  );
};

export default Home;
