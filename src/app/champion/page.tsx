import React, { Suspense } from "react";

// components
import Landing from "@/components/common/landing";
import Navbar from "../_components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// icon
import ChampionsGridList from "./_components/champions-grid-list";
// import SearchQuery from "./_components/search-query";
import SearchInput from "./_components/search-input";
import { iterableArray } from "@/lib/utils/common";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  // varible

  // function getSearched(value: string) {
  //   console.log(value);
  //   return value;
  // }

  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb93a8f34061fc0e8bb8_Events.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex flex-col items-center justify-center gap-2  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">Our Champions</h1>
              <SearchInput />
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="relative">
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63f5c4d6a1b89e8604fc9f30_Feature-card-bg.png')] w-full bg-cover bg-center absolute left-0 inset-y-0 z-0"></div>
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63c2791f2fbe55045ff7d396_Our-club-bg-02.png')] w-[400px] max-h-[400px] bg-cover bg-center absolute right-0 inset-y-0 z-0"></div>

        <div className="sec-wrap ">
          <Suspense
            fallback={`<ul className="grid sm:grid-cols-3 gap-4 ">
         ${iterableArray(6).map((ele) => (
           <li key={ele}>
             <Skeleton className="w-[200px] max-w-[300px] max-h-[300px] " />
           </li>
         ))}
          </ul>`}
          >
            <ChampionsGridList />
            {/* <SearchQuery/> */}
          </Suspense>
        </div>

        {/* <div className="mt-5 flex items-center justify-center">
          <Button variant={"secondary"} size={"lg"}>
            See more Events
          </Button>
        </div> */}
      </section>

      {/* 3rd */}
      <section className="sec-wrap">
        <div className="bg-dark-400 text-white sec-flex px-6 py-12 *:w-full *:md:w-1/2 gap-4 relative z-0">
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63eb2204c4510c6791589481_Subscribe-bg.png')] bg-cover absolute left-0 inset-y-0 -z-10"></div>
          {/* left */}
          <div>
            <h4 className="font-bold text-xl mb-2">
              Subscribe for our Newsletter
            </h4>
            <p className="text-xs">
              To experience our extraordinary sports service for you, We request
              you to provide the email below for getting in touch with us.
            </p>
          </div>

          {/* right */}
          <div className="flex items-center gap-2">
            <Input type="email" placeholder="Enter email here..." />
            <Link href="/contact">
              <Button variant={"secondary"}>Subscribe</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
