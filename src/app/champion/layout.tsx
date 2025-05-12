import { SearchChampionsContext } from "@/lib/context/search-champions";
import React from "react";

export default function ChampionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchChampionsContext>{children}</SearchChampionsContext>;
}
