import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
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
import SlideContent from "./SlideContent";
import logoimg1 from "../../../assets/images/alan-logo.png";
import logoimg2 from "../../../assets/images/mw3-logo4.png";
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
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        slidesPerView={1}
        spaceBetween={1}
        speed={300}
        loop={true}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {slideData.map((slidedata, index) => (
          <SwiperSlide key={index}>
            <SlideContent slidedata={slidedata} />
          </SwiperSlide>
        ))}
      </ThumbSlideStyled>

      <ThumbSlideStyled
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        freeMode={true}
        slidesPerView={5}
        direction="vertical"
        modules={[Autoplay, FreeMode, Thumbs]}
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
      width: 100%;
      height: 100%;
      .swiper-slide {
        position: relative;
        opacity: 1;
      }
      .swiper-slide-active {
        opacity: 1;
        transition: opacity 400ms linear;
      }
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
    border-radius: 15px;
  }
`;

export default Thumbslide;
