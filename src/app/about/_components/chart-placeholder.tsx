import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ChartPlaceholder() {
  return (
  <div className="flex items-center justify-center">
        <Skeleton className="h-[200px] md:h-[400px] w-full " />
      </div>
  );
}
