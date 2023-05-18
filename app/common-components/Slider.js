"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import SwiperCore, { Autoplay } from "swiper";
import sliderImg1 from "../../public/mobile1.jpg";
import sliderImg2 from "../../public/mobile2.jpg";
import sliderImg3 from "../../public/mobile3.jpg";

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="bg-black">
        <div className="flex mx-auto max-w-[100rem] ">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <Image src={sliderImg1}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg2}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderImg3}></Image>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};
export default Slider;
