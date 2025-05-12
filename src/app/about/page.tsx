import Landing from "@/components/common/landing";
import React from "react";
import Navbar from "../_components/Navbar";
import MainComponent from "@/components/common/main-component";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// icon
import { IoMdBasketball } from "react-icons/io";
import Link from "next/link";
import Iframe from "./_components/iframe";

const trainer = [
  {
    title: "Anthony Wills",
    substitle: "Athletic Coach",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca86bca3d58964085661f4_Team-01.jpg",
  },
  {
    title: "Helen Wilmore",
    substitle: "Kickboxing Coach",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca86bb88b8c1c51bfb70c2_Team-02.jpg",
  },
  {
    title: "Kate Winslot",
    substitle: "Rugby Coach",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca86bca2d8fd2bd6739402_Team-03.jpg",
  },
  {
    title: "Kane william",
    substitle: "Gym Coach",
    src: "https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca86bbb4278f527ace18d1_Team-04.jpg",
  },
];

const recognition = [
  { year: "2017", title: "Best Sports Club award" },
  { year: "2019", title: "Sports community of the year" },
  { year: "2021", title: "Best Training academy award" },
  { year: "2023", title: "Sports club of the year" },
];
function Page() {
  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb93163157229e61d1d5_About%20Us.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex items-center justify-center  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">About us</h1>
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="sec-wrap sec-flex *:w-full *:md:w-1/2  text-dark-400">
        <MainComponent
          subTitle="Our Club"
          h2="Welcome to the Sportans Sports Club"
          p1="We're the best club with good professional experience and various sports such as Cricket, Football, Basketball, Volleyball, Handball, Hockey, Track,  field athletics, Cycling, Tennis, Gymnastics and others."
          p2="The Sportans is the only institution in India that integrates sports and education to create the perfect training ground for champions of tomorrow."
          btn="See our league"
          action="about/league"
        />

        <div className="flex items-center justify-center  relative z-10">
          <div
            className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63e4cb2653feb4381f362fbc_About-Club-bg.png')]
            bg-no-repeat bg-center bg-contain   min-h-[200px] min-w-[300px] max-h-[250px] max-w-[350px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0
             "
          ></div>

          <div className=" flex items-center justify-center gap-10  relative z-10 *:rounded-md">
            <Image
              src="https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63e4ca913aa9cf80e2b15c65_About-Club-01.jpg"
              alt="ball"
              width="220"
              height="100"
            />
            <Image
              src="https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63e4ca91382c9d09c228daad_About-Club-02.jpg"
              alt="ball"
              width="220"
              height="100"
              className="mt-24"
            />
          </div>
        </div>
      </section>

      {/* 3rd */}
      <section className="bg-dark-400 ">
        <div className="sec-wrap sec-flex  *:w-full *:md:w-1/2  gap-7 ">
          {/* left */}
          <div>
            <MainComponent
              subTitle="Our Mission"
              h2="We are the leader in sports education"
              p1="Sportans was established with the vision to integrate sports and education to encourage young sports enthusiasts and support professional athletes. In order to promote budding talent and provide world class sports training facilities in the country."
              p2="The Sportans is the only institution in India that integrates sports and education to create the perfect training ground for champions of tomorrow."
            />
            <span className="inline-block mt-3">John Smith</span>
            <div className="w-[150px] h-[100px]">
              <Image
                src="https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63e4cf99e1728de8dfc68b17_About-mission-sign.png"
                alt="signutare"
                width={0}
                height={0}
                style={{ width: "150px", height: "auto" }}
              />
            </div>
          </div>
          {/* right */}
          <Image
            src={
              "https://assets-global.website-files.com/63c10e746e818183b41808a0/63e4d044c4db678d390a22c0_About-mission.jpg"
            }
            alt="club"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </section>

      {/* 4th */}
      <section className="sec-wrap text-dark-300">
        <MainComponent
          subTitle="The professional"
          h2="Our Skilled professional"
        />
        <ul className="grid  grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 mt-2 ">
          {trainer.map((element) => {
            return (
              <li key={element.title} className="relative  parent-overlay">
                <Image
                  src={element.src}
                  alt={element.title}
                  width={100}
                  height={50}
                  className="w-full "
                />
                <h5 className="font-bold">{element.title}</h5>
                <span className="text-dark-200 text-xs">
                  {element.substitle}
                </span>

                <div className=" overlay"></div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 5th */}
      <section className="bg-black">
        <div className="w-full aspect-video  sec-wrap">
          <Iframe />
          <p className="text-center text-4xl font-black mt-2">
            Be a part of Us To create a{" "}
            <span className="text-red-700">history</span>
          </p>
        </div>
      </section>

      {/* 6th */}
      <section className="text-center space-y-6 text-dark-400 sec-wrap">
        <MainComponent
          subTitle="Recognition"
          h2="Our clubs award performance"
          p1="World’s leading sports education brand, providing access and professional opportunity for person with an innovative programming."
        />
        <ul className=" grid sm:grid-cols-4 gap-4">
          {recognition.map((element) => {
            return (
              <li key={element.year} className="relative z-10">
                <Image
                  src="https://assets-global.website-files.com/63c10e746e818183b41808a0/63e60e4dd356b5395c814ef6_Our-club-point-bg.png"
                  alt="bg"
                  width={100}
                  height={50}
                  className=" w-1/2 md:w-full mx-auto absolute inset-0  h-full z-0"
                />
                <div className="relative z-10">
                  <h4 className="text-3xl font-bold">{element.year}</h4>
                  <p className="font-semibold">{element.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 7th */}
      <section className="bg-black relative">
        <Image
          src="https://assets-global.website-files.com/63c10e746e818183b41808a0/63e5f16f106e91287017e90c_Join-now.jpg"
          alt="members"
          width={700}
          height={100}
          className="w-full"
        />
        <div className="  absolute  inset-0 effect-fade-bg flex items-end  ">
          <div className="sec-wrap space-y-2 lg:space-y-4 text-center !my-0 ">
            <IoMdBasketball className=" text-5xl lg:text-9xl inline-block" />
            <h1 className=" text-lg md:text-xl lg:text-5xl font-black">
              Sportans
            </h1>
            <p className="w-3/4 mx-auto text-xs md:text-sm lg:text-lg">
              We are the best club with good professional experience and various
              sports such as Cricket, Football, Basketball, Volleyball,
              Handball, Hockey, Track and field athletics, Cycling, Tennis,
              Gymnastics, Skating and others.
            </p>
            <Link href="/contact">
              <Button size={"lg"} variant={"outline-d"}>
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
