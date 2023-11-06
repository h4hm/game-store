// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import VerBox from "../../common/itembox/VerBox.jsx";

const ItemSlide = () => {
  return (
    <ItemSlideStyled>
      <Swiper
        navigation={true}
        modules={[FreeMode, Navigation]}
        freeMode={true}
        className="mySwiper"
        slidesPerView={6}
        slidesPerGroup={6}
        spaceBetween={30}
        direction="horizontal"
      >
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        <SwiperSlide>
          <VerBox />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide> */}
      </Swiper>
    </ItemSlideStyled>
  );
};

const ItemSlideStyled = styled(Box)`
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
  }
`;

export default ItemSlide;
