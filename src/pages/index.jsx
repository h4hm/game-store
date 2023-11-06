import Layout from "../components/layout/Layout";
import Thumbslide from "../components/common/silde/Mainslide";
import { VStack } from "@chakra-ui/react";
import ItemSlide from "../components/common/silde/ItemSlide";

const Home = () => {
  return (
    <Layout>
      <VStack spacing="100px">
        <Thumbslide />
        <ItemSlide />
      </VStack>
    </Layout>
  );
};

export default Home;
