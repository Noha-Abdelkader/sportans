"use client";

import { Input } from "@/components/ui/input";
import { useSearchChampions } from "@/lib/context/search-champions";
import { useDebounce } from "@/lib/utils/use-debounce";
import React, { useEffect, useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce(value);

  // custom hook for search value
  const { setQuery } = useSearchChampions();

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue, setQuery]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <>
      <Input
        placeholder="Search for champion... "
        className="max-w-lg w-full bg-white/50"
        value={value}
        onChange={handleSearch}
      />
      <span>{debouncedValue}</span>
    </>
  );
}
// const [firstRender, setFirstRender] = useState(true);

// useEffect(() => {
//   setFirstRender(false);
// }, []);
// // first data
// const { data: allChampions, isPending: isPendingAllChampions } = useQuery({
//   queryKey: ["search list"],
//   queryFn: async () => {
//     const [response, error] = await catchError(getChampions());
//     if (error) {
//       throw Error(error.message);
//     }
//     if (response) {
//       console.log(response, "reeeee 1");
//       return response;
//     }
//   },
//   enabled: debouncedValue.length ? false : true,
// });
// if search

// function setEnable(){
//     if (firstRender) {
//       return false;
//     }
//     if (!firstRender && debouncedValue.length) {
//       return true;
//     }
//     if(!firstRender && !debouncedValue.length){
//       // retrun
//     }
// }
//   const { data, isPending } = useQuery({
//     queryKey: ["search list"],
//     queryFn: async () => {
//     const [response, error] = await catchError(getChampions(debouncedValue));

//     if (error) {
//       throw Error(error.message);
//     }
//     if (response) {
//       console.log(response, "reeeee 2");

//       return response;
//     }
//   },
//   enabled: setEnable()

// });
