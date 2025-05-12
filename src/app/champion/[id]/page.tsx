import React, { Suspense } from "react";

// components
import Image from "next/image";
import { getChampionByID, getChampions } from "@/lib/apis";
import { catchError } from "@/lib/utils/catch-error";
import Navbar from "@/app/_components/Navbar";
import ChampionsSwiper from "../_components/champions-swiper";
import NoData from "../_components/no-data";
import { ErrorData } from "../_components/error-data";
import { DetailsPlaceholder } from "./_components/details-placeholder";
import { SwiperPlaceholder } from "./_components/swiper-placeholder";

// icon
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";

// setTitle func
function setTitle(index: number) {
  switch (index) {
    case 0:
      return "Agent";
    case 1:
      return "Team";
    case 2:
      return "Position";
    case 3:
      return "Side";
    case 4:
      return "Date signed";
    default:
      return "--";
  }
}
async function Page({ params }: { params: { id: string } }) {
  // fetch
  // all champions
  const [champions, championsError] = await catchError(getChampions());

  // spacific champion
  const [champion, championError] = await catchError(
    getChampionByID(params.id)
  );

  if (championError) {
    return (
      <ErrorData
        desc={
          championError.error ??
          championError.code ??
          championError.message ??
          "Error will load league !"
        }
      />
    );
  }

  return (
    <main className="bg-white">
      <section>
        {/* <Landing> */}
        <div className="text-dark-400 relative before:content-'' before:bg-dark-200/50 before:bottom-0 before:absolute before:inset-x-0 before:w-[70%] before:mx-auto before:h-0.5    ">
          <Navbar />
        </div>
      </section>

      {/* 1st */}
      <section className="text-lg sec-wrap text-black [&_li]:px-3.5 [&_li]:py-5 space-y-5 relative">
        <Suspense fallback={<DetailsPlaceholder />}>
          <div className="font-lato  font-bold absolute top-[10%] smLtop-[15%] left-1/2 -translate-x-1/2  z-0 scale-150 flex flex-col items-center justify-center gap-12">
            <h4 className=" text-5xl sm:text-8xl md:text-9xl lg:text-[10rem] opacity-20">
              {champion.players[0].strTeam}
            </h4>
          </div>

          {/* image */}
          <div className=" grid md:grid-cols-12 mt-5 gap-2">
            <Image
              src={champion.players[0].strThumb}
              alt={champion.players[0].strPlayer}
              width={400}
              height={400}
              className=" md:col-span-6  w-3/4 md:w-full mx-auto rounded-full shadow-2xl shadow-black"
            />
            <div className="md:col-span-6 flex flex-col items-center mt-20">
              <h2 className=" text-3xl md:text-5xl font-bold text-nowrap ">
                {champion.players[0].strPlayer}
              </h2>
              <h4 className="text-main-500 text-3xl font-bold ">
                {champion.players[0].strSport}
              </h4>
            </div>
          </div>
          {/* bottom*/}
          <div className=" space-y-4 text-sm  *:px-3.5 *:py-5">
            <div className="grid sm:grid-cols-12 gap-3">
              <p className="text-dark-400  font-semibold  sm:col-span-9">
                {champion.players[0].strDescriptionEN}
              </p>
              {/* data + social */}
              {/* style={{ boxShadow: "13px 13px 29px -9px darkgray" }} */}
              <div className="sm:col-span-3 h-full space-y-4">
                <ul className="  text-base   space-y-5  ">
                  {[
                    champion.players[0].strNationality,
                    champion.players[0].strHeight,
                    champion.players[0].strWeight,
                  ].map((element, index) => {
                    return (
                      <li
                        key={index}
                        className="  flex flex-col items-center justify-center sec-gradient hover:scale-90 duration-300 transition-all ease-in-out   "
                      >
                        {index == 0
                          ? "Nationality"
                          : index == 1
                          ? "Height"
                          : "Weight"}
                        <span className="text-main-500 ">
                          {" "}
                          {element && element != "" ? element : "--"}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* social */}
                <ul className="col-span-1 sm:col-span-3 flex items-center justify-center gap-4 text-2xl   text-main-500 mt-auto sec-gradient  ">
                  {[
                    champion.players[0].strTwitter,
                    champion.players[0].strInstagram,
                  ].map((element, index) => {
                    return (
                      <li key={index}>
                        <a href={element}>
                          {index == 0 ? <FaTwitterSquare /> : <FaInstagram />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* data */}
            <ul className="grid grid-cols-2 sm:grid-cols-5 gap-5 items-center ">
              {[
                champion.players[0].strAgent,
                champion.players[0].strTeam,
                champion.players[0].strPosition,
                champion.players[0].strSide,
                champion.players[0].dateSigned,
              ].map((element, index) => {
                return (
                  <li
                    key={index}
                    className="col-span-1 grid grid-rows-2 items-center justify-center  text-base sec-gradient  hover:scale-90 duration-300 transition-all ease-in-out "
                  >
                    <span className="text-nowrap">{setTitle(index)}</span>
                    <span className="text-main-500 text-center text-nowrap text-clip overflow-hidden">
                      {element && element != "" ? element : "--"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Suspense>

        <div className="!mt-16">
          <h4 className="sec-header mb-4 header-after-effect">
            <span className="text-main-500 font-black">Other </span>
            Champions
          </h4>

          {championsError && (
            <ErrorData
              desc={
                championsError.error ??
                championsError.code ??
                championsError.message ??
                "Error will load champions !"
              }
            />
          )}
          <Suspense fallback={<SwiperPlaceholder />}>
            {champions ? (
              <ChampionsSwiper champions={champions} />
            ) : (
              <NoData title="champion data" />
            )}
          </Suspense>
        </div>
      </section>
    </main>
  );
}

export default Page;
