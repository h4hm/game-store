import { Box, Img } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper/modules";
import Bgimage1 from "../../../assets/images/bg1.jpg";
import Bgimage2 from "../../../assets/images/bg2.jpg";
import Bgimage3 from "../../../assets/images/bg3.jpg";
import Bgimage4 from "../../../assets/images/bg4.jpg";
import Bgimage5 from "../../../assets/images/bg5.jpg";

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
          <Img src={Bgimage1} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage2} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage3} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage4} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage5} alt="bg1" />
        </SwiperSlide>
      </ThumbSlideStyled>

      <ThumbSlideStyled
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={false}
        direction="vertical"
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        modules={[FreeMode, EffectFade, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Img src={Bgimage1} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage2} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage3} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage4} alt="bg1" />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={Bgimage5} alt="bg1" />
        </SwiperSlide>
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
