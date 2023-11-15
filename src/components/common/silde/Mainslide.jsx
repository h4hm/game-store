import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
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

const Thumbslide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <SlideContainer
        w="100%"
        h={{ base: "400px", sm: "400px", md: "600px", lg: "600px" }}
      >
        <SlideStyled
          slidesPerView={1}
          spaceBetween={10}
          speed={300}
          loop={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Autoplay, FreeMode, Thumbs]}
          className="mySwiper"
        >
          {slideData.map((slidedata, index) => (
            <SwiperSlide key={index}>
              <SlideContent slidedata={slidedata} />
            </SwiperSlide>
          ))}
        </SlideStyled>
      </SlideContainer>

      <SlideContainer
        w="100%"
        h={"800px"}
        position={"absolute"}
        top={0}
        left={0}
        zIndex={"-1"}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          speed={300}
          loop={true}
          onSwiper={setThumbsSwiper}
          modules={[Autoplay, FreeMode, Thumbs]}
          className="mySwiper2"
        >
          {slideData.map((slidedata, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slidedata.src}
                boxSize="100%"
                objectFit="cover"
                objectPosition="center"
                alt={slidedata.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideContainer>
    </>
  );
};

const SlideContainer = styled(Box)`
  .mySwiper {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 38px;
  }

  .mySwiper2 {
    width: 100%;
    height: 100%;
    display: flex;

    &::before {
      content: "";
      position: absolute;
      left: -1%;
      bottom: -1%;
      width: 102%;
      height: 50%;
      background: linear-gradient(to bottom, transparent 0%, #fff 100%);
      z-index: 100;
      pointer-events: none;
    }

    img {
      transform: scale(1.05);
      opacity: 0.9;
      filter: blur(28px) saturate(3);
    }
  }
`;

const SlideStyled = styled(Swiper)`
  margin: 0 auto;
`;

export default Thumbslide;
