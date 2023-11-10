// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import {
  Box,
  ButtonGroup,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import VerBox from "../../common/itembox/VerBox.jsx";
import { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const ItemSlide = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <ItemSlideStyled>
      <HStack justifyContent={"space-between"} gap={"10px"}>
        <Link to="/">
          <Heading
            as={"h3"}
            fontSize={"24px"}
            fontWeight={600}
            display={"flex"}
          >
            할인게임
            <BiChevronRight />
          </Heading>
        </Link>
        <ButtonGroup>
          <IconButton
            icon={<TfiArrowCircleLeft size={"33px"} color="#6E6E6E" />}
            variant="ghost"
            aria-label="prev slide"
            onClick={prevHandler}
          >
            Prev
          </IconButton>
          <IconButton
            icon={<TfiArrowCircleRight size={"33px"} color="#6E6E6E" />}
            variant="ghost"
            aria-label="next slide"
            onClick={nextHandler}
          >
            Next
          </IconButton>
        </ButtonGroup>
      </HStack>

      <Swiper
        slidesPerView={6}
        slidesPerGroup={6}
        spaceBetween={30}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        direction="horizontal"
        className="mySwiper"
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
      </Swiper>
    </ItemSlideStyled>
  );
};

const ItemSlideStyled = styled(Box)`
  width: 100%;
  .swiper {
    position: relative;
    padding-top: 25px;
    width: 100%;
    height: 100%;
  }
`;

export default ItemSlide;
