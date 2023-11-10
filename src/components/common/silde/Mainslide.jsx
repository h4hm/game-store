import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import slideImage1 from "../../../assets/images/alan2.jpg";
import slideImage2 from "../../../assets/images/cod2.jpg";
import slideImage3 from "../../../assets/images/cyberpunk2.jpg";
import slideImage4 from "../../../assets/images/deadisland2.jpg";
import slideImage5 from "../../../assets/images/moria2.jpg";
import SlideContent from "./SlideContent";
import logoimg1 from "../../../assets/images/alan-logo.png";
import logoimg2 from "../../../assets/images/mw3-logo5.png";
import logoimg3 from "../../../assets/images/cyberpunk-logo.png";
import logoimg4 from "../../../assets/images/deadisland2-logo.png";
import logoimg5 from "../../../assets/images/moria-logo.png";

const slideData = [
  {
    src: slideImage1,
    alt: "alan wake2",
    contsrc: logoimg1,
    contxt:
      "Remedy Entertainment의 최신 심리 스릴러 게임에서 일련의 제의적인 살인사건이 Bright Falls를 위협합니다.",
  },

  {
    src: slideImage2,
    alt: "call of duty, modern warfare 3",
    contsrc: logoimg2,
    contxt: "text",
  },
  {
    src: slideImage3,
    alt: "cyberpunk 2077",
    contsrc: logoimg3,
    contxt: "text",
  },
  {
    src: slideImage4,
    alt: "dead island2",
    contsrc: logoimg4,
    contxt: "text",
  },
  {
    src: slideImage5,
    alt: "return to moria",
    contsrc: logoimg5,
    contxt: "text",
  },
];

function Thumbslide() {
  return (
    <SlideContainer
      w="100%"
      h={{ base: "400px", sm: "400px", md: "600px", lg: "600px" }}
    >
      <SlideStyled
        slidesPerView={1}
        spaceBetween={10}
        speed={300}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {slideData.map((slidedata, index) => (
          <SwiperSlide key={index}>
            <SlideContent slidedata={slidedata} />
          </SwiperSlide>
        ))}
      </SlideStyled>
    </SlideContainer>
  );
}

const SlideContainer = styled(Box)`
  .mySwiper {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 38px;
  }
`;

const SlideStyled = styled(Swiper)`
  margin: 0 auto;
`;

export default Thumbslide;
