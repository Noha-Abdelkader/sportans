import { Skeleton } from "@/components/ui/skeleton";
import { iterableArray } from "@/lib/utils/common";
import React from "react";

export function SwiperPlaceholder() {
  return (
    <>
      <ul className="hidden md:grid md:grid-cols-5 gap-4 ">
        {iterableArray(5).map((ele) => {
          return (
            <li key={ele}>
              <Skeleton className="w-[150px] max-w-[200px] aspect-square " />
            </li>
          );
        })}
      </ul>
      <ul className="block md:hidden ">
        {iterableArray(1).map((ele) => {
          return (
            <li key={ele}>
              <Skeleton className="w-full h-[150px] aspect-square " />
            </li>
          );
        })}
      </ul>
    </>
  );
}
