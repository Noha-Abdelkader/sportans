import React, { Suspense } from "react";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Events from "./_components/events";
import { DetailsPlaceholder } from "../champion/[id]/_components/details-placeholder";

// const data = [
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f7949ff87ad04453097_Blog-post-01-p-500.jpg",
//     date: "8/4/2025",
//     type: "club",
//     title: "Why Regular Yoga Practice Improves Sports Performance",
//     info: "Strategies on low-hanging fruit to identify a ballpark value added activity the value.",
//     link: "",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f82097e20a89107f0aa_Blog-post-02.jpg",
//     date: "5/4/2025",

//     type: "Football",
//     title: "Discusses Athlete Wellness with Muscle & Fitness With Our Coaches",
//     info: "Capitalize on low-hanging fruit to identify a ballpark value-added matrix digital",
//     link: "",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f964508139e65d19dea_Blog-post-03-p-500.jpg",
//     date: "4/4/2025",

//     type: "club",
//     title: "Sportans Academy & Swimming Federation Sign Memorandum",
//     info: "Collaborative on low-hanging fruit to identify activity to beta economically with devlope.",
//     link: "",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3fa0aecb7275240198fa_Blog-post-04-p-500.jpg",
//     date: "1/4/2025",

//     type: "cricket",
//     title: "From Gentleman’s Game to Most Celebrated Sports: The Evolution",
//     info: "Efficiently on low-hanging fruit to identify beta test matrix that enhances the project.",
//     link: "",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ee09caa8f340fe410f68c3_Blog-post-05-p-500.jpg",
//     date: "30/3/2025",

//     type: "Football",
//     title:
//       "Spring Soccer Day: A Look at Which Student Committed to the Next Level",
//     info: "Podcasting on low-hanging fruit to identify a ballpark value to beta process.",
//     link: "",
//   },
//   {
//     src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63edf6019029ffdaf70efa4f_Blog-post-07-p-500.jpg",
//     date: "28/3/2025",

//     type: "Football",
//     title: "Soccer schools enabling high performance pathways with Sportans",
//     info: "Following the quality of our service thus having gained trust of our many clients.",
//     link: "",
//   },
// ];

async function Page() {
  return (
    <>
      {/*  1st*/}
      <section className=" text-dark-400 sec-wrap">
        <Suspense fallback={<DetailsPlaceholder/>}>
          <Events />
        </Suspense>
      </section>

      {/* 2nd */}
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
    </>
  );
}

export default Page;
