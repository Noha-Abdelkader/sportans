"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";

export default function Iframe() {
  const [pageRender, setPageRender] = useState<boolean>(false);

  useEffect(() => {
    setPageRender(true);
  }, []);
  return (
    <>
      {(typeof window !== "undefined" &&pageRender) ? (
        <iframe
          loading="lazy"
          width="70%"
          height="100%"
          src="https://www.youtube.com/embed/15kw6tmdU_A?autoplay=0&loop=0&controls=1"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full sm:w-[70%] lg:w-full h-full mx-auto"
        ></iframe>
      ) : (
        <Skeleton className="w-full sm:w-[70%] lg:w-full h-full mx-auto" />
      )}
    </>
  );
}
