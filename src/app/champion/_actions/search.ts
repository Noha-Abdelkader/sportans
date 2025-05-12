"use server";

import { ChampionType } from "@/lib/apis";
import { API_Response } from "@/lib/types/api-response";

export async function searchAction(value: string) {
  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/searchplayers.php?p=${value}`
  );

  const payload: API_Response<{ player: ChampionType[] }> =
    await response.json();
    console.log('actionnnn')
  return payload;
}
