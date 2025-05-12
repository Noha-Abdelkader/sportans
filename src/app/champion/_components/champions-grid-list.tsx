"use client";

import { ChampionType } from "@/lib/apis";
import { useSearchChampions } from "@/lib/context/search-champions";
import { API_Response } from "@/lib/types/api-response";
import { catchError } from "@/lib/utils/catch-error";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import placeholderImage from "@/assets/images/placeholder.png";
import { iterableArray } from "@/lib/utils/common";
import { Skeleton } from "@/components/ui/skeleton";
import NoData from "./no-data";
import { ErrorData } from "./error-data";

async function getData(value?: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/champions${
      value ? "?search=" + value : ""
    } `
  );
  const payload: API_Response<{ player: ChampionType[] }> =
    await response.json();
  console.log(payload, "paylloas");
  return payload;
}

function ChampionsGridList() {
  // search value
  const { query } = useSearchChampions();

  // fetch
  const {
    data: response,
    error,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["champions"],
    queryFn: async () => {
      const [response, error] = await catchError(getData(query));
      if (error) throw Error(error.message);
      return response;
    },
  });

  // refetch incase input value change
  useEffect(() => {
    refetch();
  }, [query, refetch]);

  if (isPending)
    return (
      <ul className="grid sm:grid-cols-3 gap-4 ">
        {iterableArray(6).map((ele) => (
          <li key={ele}>
            <Skeleton className="w-full max-w-[300px] h-[250px] " />
          </li>
        ))}
      </ul>
    );
  if (error) return (
    <ErrorData
      desc={  error.message ?? "Error will load champions !"}
    />
  );

  if (response) {
    if (response?.player?.length) {
      return (
        <ul className="grid sm:grid-cols-3 gap-4 ">
          {response.player.map((element) => (
            <li key={element.idPlayer} className="relative parent ">
                <Image
                  loading="lazy" // user view
                  src={element.strThumb ?? placeholderImage}
                  alt="events"
                  width={"100"}
                  height={"100"}
                  className="w-full h-full "
                />
              <Link href={`/champion/${element.idPlayer}`} className="text-xl">
                {/* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */}
                {/* opacity-100 hover:opacity-100 */}
                <div className="flex items-center justify-center flex-col bg-black/60  h-full  parent-image ">
                  {element.strPlayer}
                  <Link
                    href={`/champion/${element.idPlayer}`}
                    className="text-main-500"
                  >
                    {element.strSport}
                  </Link>
                </div>
              </Link>
            </li>
          ))}{" "}
        </ul>
      );
    } else {
      return <NoData title="champion" />;
    }
  }
}

export default ChampionsGridList;
