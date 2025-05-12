"use client";

import React from "react";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//types
import { ChampionType } from "@/lib/apis";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

// props
type Props = {
  champions: { player: ChampionType[] };
};

export default function ChampionsSwiper({ champions }: Props) {
  return (
    <>
      <Swiper
        // slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper-champions"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {champions.player.map((element) => {
          return (
            <SwiperSlide key={element.idPlayer} className="relative">
              <Image
                src={element.strThumb}
                alt={element.strPlayer}
                width={200}
                height={100}
                className="w-full max-h-[160px] max-w-[160px]"
              />
              <Link href={`/champion/${element.idPlayer}`}>
              <div className="bg-black/50 absolute inset-0 flex items-center justify-center text-white text-lg opacity-0 hover:opacity-100 duration-500 ease-in-out transition-all cursor-pointer ">
                <FaEye className="hover:scale-110 duration-300 ease-in-out transition-all" />
              </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
