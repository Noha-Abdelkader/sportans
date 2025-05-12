import Navbar from "@/app/_components/Navbar";
import React, { Suspense } from "react";
import LeagueList from "../_components/league-list";
// import LeagueChart from "../_components/league-chart";
import { catchError } from "@/lib/utils/catch-error";
import { getLeague } from "@/lib/apis";
import { ErrorData } from "@/app/champion/_components/error-data";
import dynamic from "next/dynamic";
import ChartPlaceholder from "../_components/chart-placeholder";

// ❗ Dynamically import LeagueChart with SSR disabled
const LeagueChart = dynamic(
  () => import("@/app/about/_components/league-chart"),
  {
    ssr: false,
  }
);

export default async function Page() {
  // fetch
  const [response, error] = await catchError(getLeague());

  return (
    <main className="overflow-hidden">
      {/* 1st */}
      <section>
        <div className="bg-black text-white relative before:content-[''] before:bg-dark-200/50 before:bottom-0 before:absolute before:inset-x-0 before:w-[70%] before:mx-auto before:h-0.5   ">
          <Navbar />
        </div>
      </section>
      {/* 2nd */}
      <section className="text-white bg-black relative z-0">
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63c26daa7239e952683e2cfc_Our-club-bg-01.png')] bg-cover bg-center absolute -z-10 left-0 top-0 w-full h-[700px]"></div>
        <div className="sec-wrap">


        <p className="text-xl">
          Welcome to Sportans — Your Ultimate Hub for All Things Sports! Stay
          ahead of the game with real-time scores, in-depth match analysis,
          breaking news, and exclusive insights across football, basketball,
          tennis, and more. Whether you are tracking your favorite team,
          analyzing player stats, or reliving iconic moments, SportSphere
          delivers an all-in-one experience for sports enthusiasts. Join a
          vibrant community of fans, engage in discussions, and never miss a
          moment of the action.
        </p>
        </div>
      </section>

      <section className=" text-white relative bg-black z-10 pt-10 sm:pt-16 md:pt-24">
        <div className="sec-wrap  space-y-5 ">
          <h4 className="absolute top-2 text-5xl  sm:text-7xl  md:text-9xl scale-110 left-1/2 -translate-x-1/2  header-glow">
            Statistics
          </h4>
          {error && (
            <ErrorData
              desc={
                error.error ??
                error.code ??
                error.message ??
                "Error will load league !"
              }
            />
          )}
          <div className="  grid md:grid-cols-12 gap-3  [&>*:nth-child(2)]:bg-white [&>*:nth-child(2)]:bg-opacity-10 *:text-white *:rounded-md">
            <Suspense fallback={<ChartPlaceholder />}>
              <ul className="md:col-span-3 grid grid-rows-1  grid-cols-3 md:grid-cols-1 md:grid-rows-3 gap-4 *:bg-white *:bg-opacity-50 *:text-white *:rounded-md *:px-4 *:py-2 *:flex *:justify-center *:flex-col *:gap-1.5  *:font-black *:md:text-lg *:text-nowrap *:border-2 *:border-white   ">
                {response && response.countries.length ? (
                  <>
                    <li>
                      <span className="text-amber-300">
                        {response.countries[0]?.idCup}
                      </span>
                      <span>Cup</span>
                    </li>
                    <li>
                      <span className="text-amber-300">
                        {response.countries[0]?.strCountry}
                      </span>
                      <span className="break-all">Country</span>
                    </li>
                    <li>
                      <span className="text-amber-300">
                        {response.countries[0]?.strSport}
                      </span>
                      <span>Sport</span>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </Suspense>
            <Suspense fallback={<ChartPlaceholder />}>
              {response && <LeagueChart response={response.countries} />}
            </Suspense>
          </div>
          <Suspense fallback={<ChartPlaceholder/>}>
            {response && <LeagueList response={response.countries} />}
          </Suspense>
        </div>
      </section>
    </main>
  );
}
