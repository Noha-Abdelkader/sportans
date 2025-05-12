import React from "react";

// components
import Landing from "@/components/common/landing";
import Navbar from "../_components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Page() {
  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb94e1dd2c63d9dac453_Membership.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex items-center justify-center  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">Membership</h1>
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="sec-wrap">
        <div className="space-y-4 *:placeholder:text-white *:text-white *:bg-transparent  py-10 lg:py-20 px-7 bg-black text-white">
          <h4 className="sec-header mb-10 relative after:content-'' after:bg-gray-50 after:left-0 after:-bottom-5 after:w-full after:h-0.5 after:absolute">
            Membership Form
          </h4>

          <h6 className="font-bold bg-black mb-4">Your Details</h6>
          {/* wrapper */}
          <div className="*:grid *:grid-cols-6 space-y-7">
            <div>
              <label htmlFor="name">Name:</label>
              <Input
                type="text"
                placeholder="Name"
                name="name"
                className="sec-d-input col-span-4"
              />
            </div>
            <div>
              <label htmlFor="mail">Email:</label>
              <Input
                type="email"
                placeholder="Mail"
                name="mail"
                className="sec-d-input col-span-4"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <Input
                type="tel"
                placeholder="Phone"
                name="phone"
                className="sec-d-input col-span-4"
              />
            </div>
            <div>
              <label htmlFor="gender">Sex:</label>
              <div
                className=" col-span-4 flex items-center gap-4  *:flex *:items-center *:gap-2"
                text-sm
              >
                <span>
                  <Input type="radio" name="gender" className="size-4" />
                  <span>Man</span>
                </span>
                <span>
                  <Input type="radio" name="gender" className="size-4" />
                  <span>Female</span>
                </span>
              </div>
            </div>
          </div>

          <div className="!mt-10">
            <Button variant={"secondary"} size={"lg"}>
              Submit
            </Button>
          </div>
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
