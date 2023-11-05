import { Box, Img } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper/modules";
import slideImage1 from "../../../assets/images/alan.jpg";
import slideImage2 from "../../../assets/images/cod.jpg";
import slideImage3 from "../../../assets/images/cyberpunk.jpg";
import slideImage4 from "../../../assets/images/deadisland2.jpg";
import slideImage5 from "../../../assets/images/moria.jpg";

function Thumbslide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SlideContainer>
      <ThumbSlideStyled
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        effect={"fade"}
        navigation={true}
        freeMode={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, EffectFade, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Img src={slideImage1} alt="alan wake2" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={slideImage2} alt="call of duty, modern warfare 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={slideImage3} alt="cyberpunk 2077" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={slideImage4} alt="dead island2" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={slideImage5} alt="return to moria" />
        </SwiperSlide>
      </ThumbSlideStyled>

      <ThumbSlideStyled
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        freeMode={false}
        slidesPerView={5}
        direction="vertical"
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        modules={[FreeMode, EffectFade, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
        <SwiperSlide>slide5</SwiperSlide>
      </ThumbSlideStyled>
    </SlideContainer>
  );
}

const SlideContainer = styled(Box)`
  width: 100%;
  height: 500px;
  display: flex;
  .mySwiper2 {
    width: 80%;
    margin-right: 10px;
    .swiper-wrapper {
      display: flex;
      position: relative;
      width: 400vw;
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
    background-color: #bbb;
  }
`;

export default Thumbslide;
