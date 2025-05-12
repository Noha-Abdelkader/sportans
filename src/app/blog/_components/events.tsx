"use client";

import React from "react";
import {  useQuery } from "@tanstack/react-query";

// componets
import Card from "@/components/common/card";
// import { Button } from "@/components/ui/button";

// variables
// import { revalidatePath } from "next/cache";
import { catchError } from "@/lib/utils/catch-error";
import { getEventsAction } from "../_actions/events";
import { ErrorData } from "@/app/champion/_components/error-data";
import { Skeleton } from "@/components/ui/skeleton";
import { iterableArray } from "@/lib/utils/common";

export function Events() {
  // const [response, error]=  await catchError(getEventsAction());
  // console.log(response, error, "daraa");
  // return 20;

  // // mutations
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const [response, error] = await catchError(getEventsAction());
      if (error) throw Error(error.message);
      return response.event;
    },
  });
  // const { data , error , isPending , isError } = useInfiniteQuery({
  //   queryKey: ["events"],
  //   queryFn: async () => {
  //     const [response, error] = await catchError(getEventsAction());
  //     console.log(response , 'responseeeeee')
  //     if (error) throw Error(error.message);
  //     return response;
  //   },
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, pageParam, pages) => {
  //     console.log({ lastPage, pages, pageParam });
  //     return 1;
  //   },
  //   getPreviousPageParam: (firstPage, pages) => {
  //     console.log({ firstPage, pages });
  //     return 1;
  //   }
  // });

  //   // const [data, error] = await catchError(getBlogs());
  // revalidatePath("/blog");

  if (isPending)
    return (
      <div className="sec-wrap grid md:grid-cols-2 gap-7">
        {iterableArray(6).map((ele) => (
          <Skeleton key={ele} className=" w-full h-[200px]" />
        ))}
      </div>
    );
  if (isError) return <ErrorData desc={error.message} />;

  if (data) {
    return (
      <>
        <ul className="grid  sm:grid-cols-3 gap-4 ">
          {data.map((element) => (
            <Card key={element.idEvent} element={element} />
          ))}
        </ul>

        {/* <Button variant={"before-effect"}>See more</Button> */}
      </>
    );
  }
}

export default Events;
