declare type Team = {
  id: number;
  displayName: string;
  name: string;
  logo: string;
  abbreviation: string;
};

declare type Match = {
  id: number;
  league: string;
  season: number;
  date: string; // ISO 8601 date string
  round: string;
  homeTeam: Team;
  awayTeam: Team;
};

declare type Highlight = {
  id: number;
  match: Match;
  type: string; // e.g. "VERIFIED"
  imgUrl: string;
  title: string;
  description: string | null;
  url: string;
  embedUrl: string;
  channel: string | null;
  source: string; // e.g. "espn", "youtube"
};

// for price
declare type Plan = {
  tier: string; // e.g. "BASIC"
  message: string;
};

declare type Pagination = {
  totalCount: number;
  offset: number;
  limit: number;
};

declare type HighlightResponse = {
  data: Highlight[];
  plan?: Plan;
  pagination?: Pagination;
};
