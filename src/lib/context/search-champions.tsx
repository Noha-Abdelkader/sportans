"use client";

import React, { createContext, useContext, useState } from "react";

// 1. Define context type
type SearchContextType = {
  query: string;
  setQuery: (value: string) => void;
};

// 2. Create context with default undefined
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// 3. Provider component
export function SearchChampionsContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

//4- custom hook for context
export function useSearchChampions() {
  const context = useContext(SearchContext);

  if (!context) throw Error("no search value");
  return context;
}
