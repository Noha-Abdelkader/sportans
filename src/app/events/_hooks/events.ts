"use client"

import { getEvents } from "@/lib/apis";
import { catchError } from "@/lib/utils/catch-error";
import { useQuery } from "@tanstack/react-query";

export  function useEvents() {

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const [response, error] = await catchError(getEvents());
      if (error) {
        throw Error("Failed to get events, please try again");
      }
      // console.log(response , 'resssss')
      return response.event;
    },
  });
  return { data, isPending, error, isError };
}
