// import "server-only";
"use server";


import { API_Response } from "../types/api-response";
import { LeagueData } from "../types/league";
import { EventDetails } from "../types/events";

export type ChampionType = {
  idPlayer: string;
  idTeam: string;
  strPlayer: string;
  strTeam: string;
  strSport: string;
  strThumb: string;
  strCutout: string;
  strNationality: string;
  dateBorn: string;
  strStatus: string;
  strGender: string;
  strPosition: string;
};

declare type ChampionDetails = {
  idPlayer: string;
  idTeam: string;
  idTeam2: null;
  idTeamNational: null;
  idAPIfootball: string;
  idPlayerManager: null;
  idWikidata: string;
  idTransferMkt: string;
  idESPN: string;
  strNationality: string;
  strPlayer: string;
  strPlayerAlternate: "";
  strTeam: string;
  strTeam2: "";
  strSport: string;
  intSoccerXMLTeamID: string;
  dateBorn: string;
  dateDied: null;
  strNumber: string;
  dateSigned: string;
  strSigning: string;
  strWage: "";
  strOutfitter: "";
  strKit: string;
  strAgent: string;
  strBirthLocation: string;
  strEthnicity: string;
  strStatus: string;
  strDescriptionEN: string;
  strDescriptionDE: null;
  strDescriptionFR: null;
  strDescriptionCN: null;
  strDescriptionIT: null;
  strDescriptionJP: null;
  strDescriptionRU: null;
  strDescriptionES: null;
  strDescriptionPT: null;
  strDescriptionSE: null;
  strDescriptionNL: null;
  strDescriptionHU: null;
  strDescriptionNO: null;
  strDescriptionIL: null;
  strDescriptionPL: null;
  strGender: string;
  strSide: string;
  strPosition: string;
  strCollege: null;
  strFacebook: string;
  strWebsite: "";
  strTwitter: string;
  strInstagram: string;
  strYoutube: string;
  strHeight: string;
  strWeight: string;
  intLoved: string;
  strThumb: string;
  strPoster: null;
  strCutout: string;
  strRender: string;
  strBanner: string;
  strFanart1: string;
  strFanart2: string;
  strFanart3: string;
  strFanart4: string;
  strCreativeCommons: string;
  strLocked: string;
};



export async function getChampions(searchValue?: string) {
  // `${process.env.BASE_URL_SPORTS}/v1/json/3/searchplayers.php?p=${value}`;

  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/searchplayers.php?${
      searchValue ? "p=" + searchValue : "t=Arsenal"
    }`
  );
  const payload: API_Response<{ player: ChampionType[] }> =
    await response.json();
  return payload;
}

export async function getChampionByID(id: string) {
  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/lookupplayer.php?id=${id}`
  );
  const payload: API_Response<{ players: ChampionDetails[] }> =
    await response.json();
  return payload;
}



export async function getLeague() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/league`);
  const payload: API_Response<{ countries: LeagueData[] }> = await response.json();
  return payload;
}

export async function getEvents() {
  const response = await fetch(
    `${process.env.BASE_URL_SPORTS}/v1/json/3/searchevents.php?e=Chelsea`

  );
  const payload: API_Response<{ event: EventDetails[] }> = await response.json();
  // console.log(payload , 'payyyyyy')
  return payload;
}
