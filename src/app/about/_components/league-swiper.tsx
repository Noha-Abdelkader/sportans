"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Image from "next/image";

type Props ={
    data:string[]
}
export default function LeagueSwiper({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = Array.isArray(data) ? data : [];

  return (
    <>
      {data.length ? (
        <>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                //   maxHeight: "300px",
              } as React.CSSProperties
            }
            // loop={true}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2 *:h-[200px] w-full"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {images.map((ele, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={ele}
                  alt="image"
                  width={400}
                  height={400}
                  className="cursor-pointer w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images.map((ele, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={ele}
                  alt="image"
                  width={400}
                  height={400}
                  className="cursor-pointer w-full"
                />

                {/* <img src={ele} className="cursor-pointer" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div>no</div>
      )}
    </>
  );
}