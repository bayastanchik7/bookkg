import React from "react";
import "./index.css";
import logo from "../../images/logo.svg";
import book from "../../images/book.webp";
import bookshop from "../../images/bookshop.jpeg";
import kitep from "../../images/kitep.jpg";
import { Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <Swiper
      style={{
        height: "550px",
      }}
      modules={[Navigation, Keyboard]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      keyboard
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src={logo}
          className="objet-cover"
          alt=""
          style={{
            width: "100%",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={book}
          className="objet-cover"
          alt=""
          style={{
            height: "33pc",
            width: "100%",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={bookshop}
          className="objet-cover"
          alt=""
          style={{
            height: "33pc",
            width: "100%",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={kitep}
          className="objet-cover"
          alt=""
          style={{
            height: "33pc",
            width: "100%",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
