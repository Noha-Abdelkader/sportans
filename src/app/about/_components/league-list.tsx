"use client"

import React, { useEffect } from "react";

// icons
import { PiShootingStarBold } from "react-icons/pi";
// import { MdSportsVolleyball } from "react-icons/md";
import { IoMdHome } from "react-icons/io";


// componets
import NoData from "@/app/champion/_components/no-data";
import { LeagueData } from "@/lib/types/league";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder.png";
import Link from "next/link";
import LeagueSwiper from "./league-swiper";

import AOS from "aos";
import "aos/dist/aos.css";


type Props = {
  response: LeagueData[];
};

export default function LeagueList({ response }: Props) {

  useEffect(()=>{
    AOS.init();
  },[])

  if (response.length) {
    return (
      <>
        {/* relative z-10 before:content-'' before:bg-gray-700 before:text-xl
        before:w-2 before:h-6 before:absolute before:top-0 before:left-0
        before:rounded-full */}
        <ul className="grid sm:grid-cols-3 gap-4 *:!bg-white *:!bg-opacity-50 *:rounded-md *:px-3 *:py-4 *:flex *:flex-col *:shadow-md *:border-2 *:border-white *:text-white">
          {response.slice(0, 9).map((element, index) => (
            <li
              key={element.idLeague}
              className="*:flex *:items-center *:justify-between *:text-sm space-y-2 "
              data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}
            >
              {/* 1st */}
              <div>
                <span className="size-9 aspect-square inline-block bg-white bg-opacity-20  shadow-md rounded-full p-1.5">
                  <Image
                    src={element.strBadge ?? placeholderImage}
                    alt={element.idLeague ?? ""}
                    width={50}
                    height={50}
                  />
                </span>
                <PiShootingStarBold className="text-lg text-yellow-400" />
              </div>
              {/* 2nd */}
              <div>
                <h5>{element.strSport}</h5>
                <span className="text-green-900 bg-green-200/50 rounded-md p-1 text-xs">
                  {element.strCurrentSeason}
                </span>
              </div>

              {/* 3rd */}
              <div className="bg-white bg-opacity-10 p-1.5 rounded-xl">
                <span className="text-red-900 font-bold">
                  {element.strCountry ?? "--"}
                </span>
                <Image
                  src={element.strTrophy ?? placeholderImage}
                  alt={element.idLeague ?? ""}
                  width={30}
                  height={40}
                />
              </div>

              {/* 4th */}
              <div className="text-xs">
                <p className="line-clamp-2">{element.strDescriptionEN}</p>
              </div>

              <ul className="bg-white bg-opacity-10 p-1.5 rounded-xl text-xs gap-4">
                <span className="text-xs text-green-950">
                  {element.strLeagueAlternate &&
                  element?.strLeagueAlternate != null
                    ? element.strLeagueAlternate
                    : "---"}
                </span>
                <Link
                  href={element.strWebsite ?? "www.google.com"}
                  className="underline text-amber-800 flex items-center"
                >
                  <IoMdHome />
                  Site
                </Link>
              </ul>
            </li>
          ))}
        </ul>
        <div className="w-[90%] mx-auto space-y-2">
          <LeagueSwiper
            data={response
              .map((ele) => {
                return {
                  strFanart1: ele.strFanart1,
                  strFanart2: ele.strFanart2,
                  strFanart3: ele.strFanart3,
                };
              })
              .map((ele) => Object.values(ele))
              .flat()
              .filter((el) => el !== null)}
          />
        </div>
      </>
    );
  }

  return <NoData title="league" />;
}