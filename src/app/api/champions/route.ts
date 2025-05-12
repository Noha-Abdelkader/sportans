import { NextResponse } from "next/server";
import { ChampionType } from "@/lib/apis";
import { API_Response } from "@/lib/types/api-response";
import { NextRequest } from "next/server";

export async  function GET(request: NextRequest) {
  // `${process.env.BASE_URL_SPORTS}/v1/json/3/searchplayers.php?p=${value}`;

//   get search value 
  const searchParams = request.nextUrl.searchParams;
  const searchValue = searchParams.get('search')??'';

    const response = await fetch(
      `${process.env.BASE_URL_SPORTS}/v1/json/3/searchplayers.php?${
        searchValue ? "p=" + searchValue : "t=Arsenal"
      }`
    );
    const payload: API_Response<{ player: ChampionType[] }> =
      await response.json();
    return NextResponse.json(payload);
}
