import { Box, Img } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import slideImage1 from "../../../assets/images/alan.jpg";
import slideImage2 from "../../../assets/images/cod.jpg";
import slideImage3 from "../../../assets/images/cyberpunk.jpg";
import slideImage4 from "../../../assets/images/deadisland2.jpg";
import slideImage5 from "../../../assets/images/moria.jpg";
import SlideThumbs from "./SlideThumbs";
import thumbsimg1 from "../../../assets/images/item/alan-item.jpg";
import thumbsimg2 from "../../../assets/images/item/assasin-item.jpg";
import thumbsimg3 from "../../../assets/images/item/destiny-item.jpg";
import thumbsimg4 from "../../../assets/images/item/fortnite-item.jpg";
import thumbsimg5 from "../../../assets/images/item/evil-item.jpg";

const thumbArr = [
  {
    thumbnail: thumbsimg1,
    name: "Alan Wake2",
  },
  {
    thumbnail: thumbsimg2,
    name: "Call of Duty",
  },
  {
    thumbnail: thumbsimg3,
    name: "Cyberpunk 2077",
  },
  {
    thumbnail: thumbsimg4,
    name: "Dead island2",
  },
  {
    thumbnail: thumbsimg5,
    name: "Return to Moria",
  },
];

function Thumbslide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SlideContainer
      w="100%"
      h={{ base: "400px", sm: "400px", md: "500px", lg: "700px" }}
    >
      <ThumbSlideStyled
        effect={"fade"}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, EffectFade, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Img
            src={slideImage1}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            alt="alan wake2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={slideImage2}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            alt="call of duty, modern warfare 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={slideImage3}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            alt="cyberpunk 2077"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={slideImage4}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            alt="dead island2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            src={slideImage5}
            boxSize="100%"
            objectFit="cover"
            objectPosition="center"
            alt="return to moria"
          />
        </SwiperSlide>
      </ThumbSlideStyled>

      <ThumbSlideStyled
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        freeMode={true}
        slidesPerView={5}
        direction="vertical"
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        modules={[FreeMode, EffectFade, Thumbs]}
        className="mySwiper"
      >
        {thumbArr.map((thumbdata, index) => (
          <SwiperSlide key={index}>
            <SlideThumbs thumbdata={thumbdata} />
          </SwiperSlide>
        ))}
      </ThumbSlideStyled>
    </SlideContainer>
  );
}

const SlideContainer = styled(Box)`
  display: flex;
  .mySwiper2 {
    width: 80%;
    margin-right: 10px;
    border-radius: 15px;
    .swiper-wrapper {
      /* display: flex; */
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .mySwiper {
    width: 20%;
    display: flex;
    flex-flow: column nowrap;
  }
`;

const ThumbSlideStyled = styled(Swiper)`
  overflow: hidden;
  margin: 0 auto;

  .swiper-slide {
    text-align: center;
    background-color: #eeeeee;
    border-radius: 15px;
  }
`;

export default Thumbslide;
