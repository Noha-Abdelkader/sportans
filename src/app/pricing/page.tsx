import Landing from "@/components/common/landing";
import React from "react";
import Navbar from "../_components/Navbar";
import { Button } from "@/components/ui/button";
import MainComponent from "@/components/common/main-component";
import Image from "next/image";
import Link from "next/link";

const pricing = [
  {
    title: "Normal",
    list: [
      "Basic Training Session",
      "Fitness Guides",
      "Allowed In weekdays",
      "Play One Sport",
    ],
    price: "20",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/643129c8a50b9cfbbe457800_Pricing-01-p-500.jpg",
  },
  {
    title: "Standard",
    list: [
      "Personal Training Session",
      "Fitness Guides with coach",
      "Allowed all days",
      "Play Mentioned Sports",
    ],
    price: "40",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63e5d90b7b7e38505f6867d0_Pricing-02-p-500.jpg",
  },
  {
    title: "premium",
    list: [
      "Personal Training Session",
      "Personal Fitness Trainer",
      "Allowed 24/7",
      "play any sports",
    ],
    price: "60",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63e5d90a2a2eb3b6af76c9d7_Pricing-03-p-500.jpg",
  },
];

function Page() {
  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb94f1f3edb8a60b3b39_Pricing.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex items-center justify-center  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">Choose Your Best Plan</h1>
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="sec-wrap text-dark-300 ">
        {/* <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca826a198b213b2ba94e94_Team-bg-02.png')] bg-cover w-full h-full absolute left-0 top-0"></div> */}
        <MainComponent subTitle="Pricing" h2="Choose your plan" />
        <ul className="grid sm:grid-cols-3 gap-4 mt-3">
          {pricing.map((element) => {
            return (
              <li
                key={element.title}
                className="border-[1px] border-dark-400 hover:bg-dark-300 hover:text-white duration-500 ease-in-out"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-black/20 flex justify-center flex-col text-white px-2 lg:px-7">
                    <h3 className="capitalize text-xl font-black">
                      {element.title}
                    </h3>
                    <p>
                      <span className="text-4xl font-bold">
                        ${element.price}
                      </span>{" "}
                      / month
                    </p>
                  </div>
                  <Image
                    src={element.src}
                    alt={element.title}
                    width={100}
                    height={100}
                    className="w-full "
                  />
                </div>

                <ul className=" text-center mx-5 lg:mx-16">
                  {element.list.map((ele) => {
                    return (
                      <li
                        key={ele}
                        className="border-b-[1px] border-gray-200 
                         text-xs font-black py-3"
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center justify-center">
                  <Link href="/contact">
                    <Button
                      variant={"before-effect"}
                      size={"lg"}
                      className="mx-auto my-5"
                    >
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Page;
