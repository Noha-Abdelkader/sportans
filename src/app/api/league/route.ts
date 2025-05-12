import { NextResponse } from "next/server";
import { API_Response } from "@/lib/types/api-response";
import { LeagueData } from "@/lib/types/league";

export async function GET() {
  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/search_all_leagues.php?c=England`
  );
  const payload: API_Response<{ countries: LeagueData[] }> =
    await response.json();
  return NextResponse.json(payload);
}
