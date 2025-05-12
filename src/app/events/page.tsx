import React from "react";

// icons

// components
import Landing from "@/components/common/landing";
import Navbar from "../_components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import EventsTicket from "./_components/events-ticket";

// const gallery = [
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef58048ee9310c87c9223d_Event-post-02-p-500.jpg",
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef580da67520116d2f66a6_Event-post-03-p-500.jpg",
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef57fb5a1f587e0cf7fea3_Event-post-01-p-500.jpg",
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef5816ee092d5e8e935203_Event-post-04-p-500.jpg",
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef5826ab26092e79c36c73_Event-post-06-p-500.jpg",
//   "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ef581eec5e598168e101cb_Event-post-05-p-500.jpg",
// ];

  function Page() {

  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb93a8f34061fc0e8bb8_Events.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex items-center justify-center  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">Our Events</h1>
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="sec-wrap">

        <EventsTicket/>
       

        <div className="mt-5 flex items-center justify-center">
          <Button variant={"secondary"} size={"lg"}>
            See more Events
          </Button>
        </div>
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
