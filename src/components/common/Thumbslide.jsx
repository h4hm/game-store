import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Thumbslide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SlideContainer>
      <ThumbSlideStyled
        // style={{
        //   "--swiper-navigation-color": "#fff",
        //   "--swiper-pagination-color": "#fff",
        // }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swipersec mySwiper2"
      >
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
        <SwiperSlide>slide5</SwiperSlide>
      </ThumbSlideStyled>

      <ThumbSlideStyled
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swipersec mySwiper"
      >
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
        <SwiperSlide>slide5</SwiperSlide>
      </ThumbSlideStyled>
    </SlideContainer>
  );
};

const SlideContainer = styled(Box)`
  width: 100%;
  height: 500px;
`;

const ThumbSlideStyled = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    height: 300px;
    background: yellow;
  }
`;

export default Thumbslide;
