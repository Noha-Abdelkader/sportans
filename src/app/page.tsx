"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// components
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

const swiperImage = [
  "https://assets-global.website-files.com/63c10e746e818183b41808a0/63f9a8dc69cf809d9df57ebf_Banner-01.jpg",
  "https://assets-global.website-files.com/63c10e746e818183b41808a0/63c249c617b0ed2487033c57_Banner-02.jpg",
  "https://assets-global.website-files.com/63c10e746e818183b41808a0/63c2529e9bcbb430dc6a22f8_Banner-03.jpg",
];

// icons
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FaRegHandRock, FaFootballBall, FaStar } from "react-icons/fa";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

// images
import sec2 from "@/assets/images/sec1.jpg";
import Link from "next/link";
// import TextTyping from "@/components/common/text-typing";
import Landing from "@/components/common/landing";
import MainComponent from "@/components/common/main-component";
import CountAnimated from "./_components/count-animated";

// feature section

const feature = [
  {
    title: "Swimming",
    subTitle: "Free Style",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c350d5727e5fee4fcc4d_Feature-01.jpg",
  },
  {
    title: "Tennis",
    subTitle: "Rocket Sport",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c351910309256c9f3c8a_Feature-02.jpg",
  },
  {
    title: "Rugby",
    subTitle: "Team Sport",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c35148cdfdacca0f9ecc_Feature-03.jpg",
  },
  {
    title: "Golf",
    subTitle: "Club & Ball",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c35086381f33e6fb8b94_Feature-04.jpg",
  },
  {
    title: "Cycling",
    subTitle: "Club & Ball",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c350aee9c974d4e845bb_Feature-05.jpg",
  },
  {
    title: "Track training",
    subTitle: "Athlete",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63f5c351c0486828c0fe4b6d_Feature-06.jpg",
  },
];

// about us
const aboutUs = [
  {
    title: "What are Sport Clubs?",
    desc: "The focus of the Sport Club program is to offer recreational, social, and competitive opportunities for students at a variety of skill levels. Clubs are student-run and often compete with other universities around the state and country.",
  },
  {
    title: "How do I join a club?",
    desc: "Each club is responsible for determining its membership requirements and policies. For information on joining a club, visit the Sport Clubs page for more information on a specific club.",
  },
  {
    title: "What is the time commitment?",
    desc: "Practice times vary by club. Most practices are two to three times a week for two hours per practice. Clubs determine the number of practices a member must attend.",
  },
  {
    title: "How do they get to games?",
    desc: "The College discourages students from transporting other students in personal vehicles to and from contests due to the personal liability which is transferred to the driver and the vehicle owner in the case of an accident.",
  },
  {
    title: "Do these clubs have try-outs?",
    desc: "Some are open to anyone who either wants to continue an activity they currently participate in or to anyone who wants to try a new sport. However, there are many clubs that do hold try-outs due to their competitive nature and limited facilities.",
  },
];

// join section
const joinUS: string[] = [
  "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/641406cabe9e525932a99cfb_How%20to%20choose-01.jpg",
  "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/641406ca24cfc21dd3f64363_How%20to%20choose-03.jpg",
  "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/641406ca9741e47438afd7ca_How%20to%20choose-02.jpg",
  "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/641406cb25deb194dbf7d878_How%20to%20choose-04.jpg",
];

const joinUSData: { title: string; description: string; icon: JSX.Element }[] =
  [
    {
      title: "Choose your Sports",
      description: "Dreams needs to be driven by passion to make it come true.",
      icon: <FaFootballBall />,
    },
    {
      title: "Train by Professional",
      description:
        "Based on your sports dream the trainer will assigned to you.",
      icon: <GiAmericanFootballPlayer />,
    },
    {
      title: "Become a Pro",
      description:
        "With the prefect training under professional you become PRO",
      icon: <FaRegHandRock />,
    },
  ];
// testimonial
const testimonial = [
  {
    title: "Kemmily Mith",
    subtitle: "Hockey Student",
    describe:
      "Being part of the club hockey team has helped build my confidence in being a leader, given me great people to connect with, and given me the incredible opportunity to represent my school while playing a sport I love.",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63ca572882c5ea1d9f99389e_Testimonial-author-01.jpg",
  },
  {
    title: "Jenifer Aniston",
    subtitle: "Golf Trainee",
    describe:
      "Participating in a sports club has given me the opportunity to meet students I wouldn't have otherwise met, especially in other classes. It has also allowed me to have a more active role on campus and being a student leader .",
    src: "",
  },
  {
    title: "Therrie Silvello",
    subtitle: "Wrestling",
    describe:
      " have really enjoyed the Sports Community webinars and found them valuable and informative. It has captured some real challenges that are faced by the sporting community .",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63ca5728ee936762e9fde775_Testimonial-author-02.jpg",
  },
  {
    title: "Lin Myeer",
    subtitle: "Surf Teachers",
    describe:
      "I have stepped out of my comfort zone by joining a club sport and in doing so have made some of my favorite's memories from the entire year, made a lot of new friendships, stayed healthy and active,",
    src: "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63ca5728daa242cb925d8337_Testimonial-author-04.jpg",
  },
];

export default function Home() {
  // variables
  const [swiperIdx, setSwiperIdx] = useState<number>(0);

  // effect
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <main className="min-h-[50dvh] ">
      {/* <div className="h-full bg-black/50 fixed inset-0 z-0"></div> */}

      {/* st */}
      <Landing>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectFade, Navigation]}
          className="mySwiper"
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2200}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSlideChange={(value) => {
            setSwiperIdx(value.activeIndex);
          }}
        >
          {swiperImage.map((image: string, index: number) => (
            <SwiperSlide
              key={image}
              style={{ backgroundImage: `url(${image})` }}
              className="bg-cover bg-center min-h-[50dvh] "
            >
              <Navbar />
              <div className=" flex  flex-col items-center justify-center h-full min-h-[50dvh]  sec-wrap *:text-center space-y-5">
                {/* swiper */}

                {/* containt */}
                <h1
                  data-aos={index % 2 != 0 ? "fade-right" : "fade-left"}
                  className="text-4xl font-bold "
                >
                  Welcome to the {index == 0 ? "Sportans" : "champion"}Sports
                  Club
                </h1>
                <p data-aos={index % 2 == 0 ? "fade-right" : "fade-left"}>
                  {index == 0
                    ? "We are the best club with good professional experience and various sports such as Cricket, Football, Basketball,Volleyball, Handball, Hockey, Track and field athletics,Cycling, Tennis, Gymnastics, Kabaddi, Kho-Kho, Skating and others."
                    : "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."}
                </p>
                <Link href={"/about/league"}>
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className="font-bold"
                  >
                    Learn more
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          ))}

          {/* <!-- If we need navigation buttons --> */}
          {/* {swiperIdx !== 0 && ( */}
          <div className={`swiper-button-prev sec-1`}>
            <div className="txt">
              <IoIosArrowRoundBack />
              <h6>prev</h6>
            </div>
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  swiperImage[swiperIdx - 1] ?? swiperImage[swiperIdx]
                })`,
              }}
            ></div>
          </div>
          {/* )} */}

          <div className={`swiper-button-next sec-1`}>
            <div
              className="img"
              style={{
                backgroundImage: `url(${
                  swiperImage[swiperIdx + 1] ?? swiperImage[swiperIdx]
                })`,
              }}
            ></div>
            <div className="txt">
              <h6>Next</h6>
              <IoIosArrowRoundForward />
            </div>
          </div>
        </Swiper>
      </Landing>
      {/* 2nd */}
      <section className=" text-dark-300   relative z-10">
        <div
          className={`bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63c26daa7239e952683e2cfc_Our-club-bg-01.png')] absolute inset-0 z-0`}
        ></div>

        <div className="sec-wrap sec-flex gap-7  *:w-full *:md:w-1/2 items-center sm:gap-10 ">
          {/* left */}
          <div data-aos="fade-up" data-aos-duration="3000">
            <MainComponent
              subTitle="Our Club"
              h2=" We are the leader in sports education"
              p1="  Sportans was established with the vision to integrate sports and
            education to encourage young sports enthusiasts and support
            professional athletes."
              p2=" The Sportans is the only institution in India that integrates
            sports and education to create the perfect training ground for
            champions of tomorrow.
            "
              btn="About our club"
            />
          </div>

          {/* right */}
          <div>
            <div className="flex flex-col relative after:content-'' after:absolute after:-right-2 after:-top-2 after:w-16 after:h-2 after:bg-dark-400 before:content-'' before:absolute before:-right-2 before:-top-0 before:w-2 before:h-24 before:bg-dark-400">
              <Image src={sec2} alt="club" className="w-full" />
              <span className="bg-black uppercase text-white p-2 text-center">
                Be a part of it we create a
                <span className="text-main-500"> history</span>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-main-500 p-2 font-black text-xl  inline-flex ">
                <p className="border-4 border-white p-5 flex gap-1">
                  <span className="text-white font-lato mx-1 text-4xl   ">
                    420+
                  </span>
                  <span
                    className="text-dark-300 font-lato text-sm  inline-block
                "
                  >
                    Awards
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd */}
      <section className=" text-dark-300   relative z-10">
        <div
          className={`bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63c2791f2fbe55045ff7d396_Our-club-bg-02.png')] absolute inset-y-0 left-0 z-0 w-full   bg-no-repeat`}
        ></div>

        <div className="sec-wrap text-center  relative z-0">
          <div className="space-y-5">
            <MainComponent
              subTitle="Matches"
              h2="The next best event starts in"
            />

            <CountAnimated />

            <Link href={"/events"} className="block mb-5">
              <Button variant={"outline"} size={"lg"}>
                Get Ticket
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* 4th */}
      <section className=" text-white  bg-dark-400 flex items-start flex-wrap sm:flex-nowrap  *:w-full *:md:w-1/2 relative z-10 ">
        {/* bg */}
        <div
          className={`bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63f5c4d6a1b89e8604fc9f30_Feature-card-bg.png')] bg-bottom bg-cover absolute left-0 bottom-0 z-0  h-full bg-no-repeat`}
        ></div>
        {/* left */}
        <div className="space-y-3 px-10 py-20 text-white">
          <MainComponent
            subTitle="Features"
            h2="Types of sports we are focused"
            p1=" In order to promote budding talent and provide world class sports
            training facilities in the country."
            btn="See more sports"
            action="/events"
          />
        </div>

        {/* right */}
        <div className="grid grid-cols-2 gap-5 lg:gap-10 ">
          {feature.map((element, index) => {
            return (
              <div
                key={element.title}
                className={index % 2 !== 0 ? "mt-16" : ""}
                data-aos="fade-up"
                data-aos-duration={index * 2000}
                data-aos-delay={index % 2 !== 0 ? 20 : 10}
              >
                <div>
                  <Image
                    src={element.src}
                    alt={element.title}
                    width={100}
                    height={100}
                    className="w-[60%] mx-auto mb-1"
                  />
                </div>
                <div className="flex items-center justify-between  px-6 lg:px-20">
                  <div>
                    <h5 className=" text-sm xl:text-lg font-semibold">
                      {element.title}
                    </h5>
                    <h6 className="text-dark-200 text-xs xl:text-sm">
                      {element.subTitle}
                    </h6>
                  </div>
                  <div className="border-2 border-main-500 rounded-full size-6 xl:size-9  hover:bg-main-500 hover:scale-110  duration-500 ease-in-out ">
                    <Link
                      href="/about/league"
                      className="flex items-center justify-center h-full"
                    >
                      <IoIosArrowRoundForward className="text-main-500 text-2xl -rotate-45 hover:rotate-0 hover:text-white duration-500 ease-in-out  " />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5th */}
      <section className="flex items-center flex-wrap md:flex-nowrap *:w-full *:md:w-1/3 gap-5 sec-wrap text-dark-400">
        {/* left */}

        <div className="space-y-3 ">
          <MainComponent
            subTitle="Why We Are"
            h2="The Best Sports club with all inbuilt Features to make an amazing
            players."
            btn="Join Our Club"
          />
          <p className="text-dark-200 text-sm">
            The education facilities provided by Sportans are similar to regular
            schools but with professional sports facilities.
          </p>
          <p className="text-dark-200 text-sm">
            We have a team of professional teachers with great teaching
            experience.
          </p>
        </div>
        {/* center */}

        <ul className="   relative z-0 flex items-center justify-center min-h-[350px]">
          <li className="">
            <Image
              src="https://assets-global.website-files.com/63c10e746e818183b41808a0/64140a3deb11791cb2f1ddba_Choose-02.png"
              alt="background"
              width={200}
              height={200}
              className="w-[50%] md:w-[75%] 2xl:w-[85%] relative -z-10 h-full"
            />
          </li>
          {joinUS.map((element, index) => (
            <li
              key={element}
              className={`absolute   ${index == 0 && "rounded-bl-[40px]"} , ${
                index == joinUS.length - 1 && "rounded-tr-[40px]"
              }  `}
              style={{
                bottom: `calc(${index * 50}px)`,
                left: `calc(${index * 70}px)`,
                zIndex: `-${index + 1}`,
              }}
            >
              <Image
                data-aos="fade-up"
                data-aos-duration={index * 2000}
                src={element}
                alt="member"
                width={100}
                height={200}
                className={`w-full  border-4 border-white ${
                  index == 0 && "rounded-bl-[40px]"
                } , ${index == joinUS.length - 1 && "rounded-tr-[40px]"} `}
                sizes="(max-width: 640px) 150px, (max-width: 1024px) 120px, 100px"
                priority={false}
              />
            </li>
          ))}
        </ul>
        {/* right */}

        <ul className="flex flex-col gap-3 ">
          {joinUSData.map(
            (
              element: {
                title: string;
                description: string;
                icon: React.ReactNode;
              },
              index: number
            ) => {
              return (
                <li
                  data-aos="zoom-out"
                  data-aos-duration={index * 2000}
                  key={element.title}
                  className="flex items-center gap-2"
                >
                  <div className="border border-dark-300 border-dashed  rounded-full size-16  min-w-[4rem] flex items-center justify-center relative">
                    <span className="bg-main-500 size-5 rounded-full flex items-center justify-center text-xs absolute -top-1 left-0">
                      {index + 1}
                    </span>
                    <span className="text-main-500 bg-white shadow-main rounded-full size-10 flex items-center justify-center text-xl">
                      {element.icon}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark-300 text-lg">
                      {element.title}
                    </h5>
                    <p className="text-dark-200 text-xs">
                      {element.description}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>

      {/* 6th */}
      <section
        className={`bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63c28cd81a141579c115a0cd_Testimonial.jpg')] bg-center bg-cover min-h-[75vh] flex items-end py-10`}
      >
        <Swiper
          data-aos="fade-left"
          data-aos-duration={1000}
          modules={[Navigation, Autoplay]}
          className="mySwiper max-w-7xl mx-auto"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonial.map((el, index) => (
            <SwiperSlide
              key={el.title}
              className="min-h-[250px] max-h-[250px] w-full h-full  bg-dark-400/50 rounded-xl px-5 divide-y-2 divide-white/50 "
            >
              {/* header */}
              <div className="flex items-center gap-4 py-2 ">
                <div>
                  {el.src ? (
                    <Image
                      src={el.src}
                      alt={el.src}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="size-12  bg-white/50 text-main-500 rounded-full p-2.5 font-black">
                      {" "}
                      {el.title[0]}
                    </span>
                  )}
                </div>
                <div className="font-bold">
                  <h5 className="text-sm">{el.title}</h5>
                  <span className="text-white/60 text-[10px]">
                    {el.subtitle}
                  </span>
                </div>
              </div>
              {/* body */}
              <p className="text-xs pt-2"> {el.describe}</p>
              <ul className="absolute bottom-0 inset-x-3 py-1.5 px-4 flex items-center gap-1">
                {Array.from(`${index % 2 == 0 ? "start" : "star"}`).map(
                  (star, idx) => (
                    <li key={idx}>
                      <FaStar className="text-yellow-500" />
                    </li>
                  )
                )}
              </ul>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next sec-6">
            <IoIosArrowDroprightCircle />
          </div>
          <div className="swiper-button-prev sec-6">
            <IoIosArrowDropleftCircle />
          </div>
        </Swiper>
      </section>

      {/* 7th */}
      <section className="bg-black relative  ">
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap sec-wrap  ">
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca7f036d4b238f5897cb35_Faq-bg-01.png')] absolute left-0 inset-y-20 w-[280px] hidden lg:inline-block"></div>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63ca7f036d4b238f5897cb35_Faq-bg-01.png')] absolute right-0 inset-y-20 w-[150px] hidden lg:inline-block"></div>
          {/* left */}
          <div className="w-full md:w-1/2">
            <Image
              src={
                "https://cdn.prod.website-files.com/63c10e746e818183b41808a0/63ca74438378fed21b2ffcc8_Faq.png"
              }
              alt="player"
              width={100}
              height={200}
              className="w-1/2 mx-auto "
            />
          </div>
          {/* right */}
          <div className="w-full md:w-1/2 xl:w-1/3 me-auto">
            <Accordion type="single" collapsible>
              {aboutUs.map((element, index) => {
                return (
                  <AccordionItem
                    key={element.title}
                    value={element.title}
                    data-aos="fade-left"
                    data-aos-duration={`${index * 100 + 3000}`}
                  >
                    <AccordionTrigger className=" flex items-center justify-between  hover:no-underline hover:text-main-500 duration-500">
                      <span className="text-base font-bold text-nowrap">
                        {element.title}
                      </span>
                      <FaPlus className="AccordionChevron" aria-hidden />
                      {/* <FaPlus
                        className="h-4 w-4 shrink-0 group-data-[state=open]:hidden"
                        aria-hidden
                      />
                      <FaMinusSquare
                        className="h-4 w-4 shrink-0 hidden group-data-[state=open]:block"
                        aria-hidden
                      /> */}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-gray-100">
                      {element.desc}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
