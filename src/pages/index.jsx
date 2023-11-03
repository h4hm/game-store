import Layout from "../components/layout/Layout";
import Thumbslide from "../components/common/silde/Thumbslide";
import VerBox from "../components/common/itembox/VerBox";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <VStack spacing="100px">
        <Thumbslide />
        <VerBox />
      </VStack>
    </Layout>
  );
};

export default Home;
