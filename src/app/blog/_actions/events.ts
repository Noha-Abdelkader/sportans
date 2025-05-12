"use server";

import { API_Response } from "@/lib/types/api-response";
import { EventDetails } from "@/lib/types/events";

// function

export async function getEventsAction() {
  // console.log(process.env.API_ROUTE, "API_ROUTE");
  // return 10;
  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/searchevents.php?e=Chelsea`
    // `${
      // process.env.NEXT_PUBLIC_API_ROUTE
    // }/api/events${offset ? "?offset=" + offset : ""}`
  );
  const payload: API_Response<{ event: EventDetails[] }> =
    await response.json();

  // console.log(payload , 'payyyyyyyyyyyy')
  return payload;
}
