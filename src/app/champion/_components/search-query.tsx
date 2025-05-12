"use client";

import { useSearchChampions } from "@/lib/context/search-champions";
import React from "react";

function SearchQuery() {
  const { query } = useSearchChampions();
  return <div>{query}</div>;
}

export default SearchQuery;

export function GetQuerySearch() {
  const { query } = useSearchChampions();
  return query;
}
