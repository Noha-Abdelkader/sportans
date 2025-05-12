import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export function DetailsPlaceholder() {
  return (
    <div className="space-y-4">
      <div className="flex items-center flex-wrap md:flex-nowrap w-full gap-4">
        <Skeleton className="rounded-full w-[400px] md:w-[500px] aspect-square" />

        <div className="space-y-2 w-full">
          <Skeleton className=" h-[40px] aspect-square w-full" />
          <Skeleton className=" h-[40px] aspect-square w-1/2 mx-auto" />
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <Skeleton className=" h-[200px] aspect-square w-full" />
        <Skeleton className=" h-[200px] aspect-square w-1/2 mx-auto" />
      </div>
      <Skeleton className=" h-[200px] aspect-square w-full" />
    </div>
  );
}
