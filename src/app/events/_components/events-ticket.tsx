"use client";

import React, { useEffect } from "react";
import { useEvents } from "../_hooks/events";
import { Skeleton } from "@/components/ui/skeleton";
import { iterableArray } from "@/lib/utils/common";
import { ErrorData } from "@/app/champion/_components/error-data";
import NoData from "@/app/champion/_components/no-data";
import { MdEventAvailable } from "react-icons/md";
import Image from "next/image";
import placeholderImage from "@/assets/images/placeholder.png";
import { IoTimeOutline } from "react-icons/io5";
import { MdLocationCity } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css"; 

export default function EventsTicket() {
    // hooks
  const { data, isPending, error } = useEvents();


//   effect
useEffect(()=>{
Aos.init()
} , [])

  if (isPending) {
    return (
      <div className="grid sm:grid-cols-2 gap-7 ">
        {iterableArray(6).map((ele) => (
          <Skeleton key={ele} className="w-full h-[200px]" />
        ))}
      </div>
    );
  }
  if(error){
    return <ErrorData/>
  }
  if(!data?.length) {
    return <NoData/>
  }
  return (
    <ul className="grid lg:grid-cols-2 gap-4 lg:gap-10  text-xs">
      {data.map((element , index) => (
        <li
        data-aos= {index %2 ==0 ? "flip-left" : "flip-right" }
          key={element.idEvent}
          className="  bg-yellow-50 rounded-md ps-8 pe-2 py-4  grid grid-cols-12 gap-7  overflow-hidden relative before:content-'.' before:absolute before:left-0 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:w-10 before:h-10 before:rounded-full before:bg-white before:border-2 before:border-main-500 before:shadow-md 
              after:content-'' after:absolute after:left-0  after:top-0  after:w-3/4 after:h-1  after:bg-main-500 after:text-black after:shadow-md  text-black
              shadow-md
              "
        >
          <div className="relative col-span-3 overflow-hidden  flex items-center justify-center">
            {/* <div
              className="bg-black bg-opacity-40 absolute inset-0 w-full "
              // style={{ borderRadius: "47% 53% 39% 61% / 30% 30% 70% 70%  " }}
            ></div> */}
            <Image
              src={element.strAwayTeamBadge ?? placeholderImage}
              alt="events"
              width={200}
              height={20}
              className="w-full shadow-sm shadow-white  border border-white p-1"
              // style={{ borderRadius: "47% 53% 39% 61% / 30% 30% 70% 70%  " }}
            />
          </div>

          <div className="col-span-9 *:flex *:items-center *:justify-between space-y-2  ">
            <h3 className="*:flex *:items-center">
              <span>{element.strHomeTeam}</span>
              <MdEventAvailable className="text-yellow-700 text-xl" />
            </h3>
            <p className="text-main-500 bg-gray-300 rounded-md py-0.5">
              {element.strEvent}
            </p>
            <p className="*:flex *:items-center">
              <span>{element.strLeague}</span>
              <span className="*:flex *:items-center">
                <IoTimeOutline />
                {element.dateEvent}{" "}
              </span>
            </p>
            <p className="*:flex *:items-center">
              <span>{element.strVenue}</span>
              <span className="*:flex *:items-center">
                <MdLocationCity />
                {element.strCountry}{" "}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
