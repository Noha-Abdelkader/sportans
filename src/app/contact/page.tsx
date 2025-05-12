import React from "react";

// components
import Landing from "@/components/common/landing";
import Navbar from "../_components/Navbar";
import MainComponent from "@/components/common/main-component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// icons
import { FaPhoneAlt, FaPlus } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Link from "next/link";

const hours = [
  { days: ["Mon", "Fri"], time: ["08:00 AM", "09:00 PM"] },
  { days: ["Sat"], time: ["09:00 AM", "06:00 PM"] },
  { days: ["Sunday"], time: ["09:00 AM", "02:00 PM"] },
];

const getInTouch = [
  {
    title: "Phone",
    desc: "We are here to help you happily via the phone at any time.",
    info: "(00) 123 456 7890",
    icon: FaPhoneAlt,
  },
  {
    title: "Mail",
    desc: "You will get a reply mail within 12 hours from our support.",
    info: "sportans@sports.com",
    icon: IoIosMail,
  },
  {
    title: "Location",
    desc: "Visit our sports academy to see the multiple trainings live.",
    info: "725 Park Ave, New York",
    icon: FaLocationDot,
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

const info = [
  { icon: FaPhoneAlt, title: "Call Us", details: "(00) 123 456 7890" },
  { icon: IoIosMail, title: "Email", details: "sportans@sports.com" },
];

function Page() {
  return (
    <main>
      {/* 1st */}
      <section>
        <Landing>
          <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb9262bed7052b912353_Contact.jpg')] bg-cover bg-center ">
            <Navbar />
            <div className="flex items-center justify-center  min-h-[40dvh]">
              <h1 className="text-4xl font-bold ">Contact</h1>
            </div>
          </div>
        </Landing>
      </section>

      {/* 2nd */}
      <section className="sec-wrap sec-flex  sm:flex-nowrap *:w-full *:sm:w-1/2 text-dark-400 gap-7">
        {/* left */}
        <div>
          <MainComponent
            subTitle="Contact"
            h2="Get in touch with us"
            p1="To experience our extraordinary sports coaching, We request you to provide the details below for getting in touch with you as soon."
          />

          <h4 className="relative mt-4 mb-6 before:content-'' before:w-28 before:h-0.5 before:bg-gray-200 before:absolute before:-bottom-4 ">
            Open Hours
          </h4>
          <ul className="">
            {hours.map((element, index) => (
              <li key={index} className="grid grid-cols-2">
                <span>
                  {element.days.map((ele, idx) => (
                    <span key={ele} className="font-bold  ">
                      {ele}
                      {idx != element.days.length - 1 &&
                        element.days.length >= 2 &&
                        "-"}
                    </span>
                  ))}
                </span>

                {/* <span className="col-span-1">{":"}</span> */}
                <span className=" text-dark-200 text-nowrap">
                  {element.time.map((ele, idx) => (
                    <span key={ele} className="font-bold">
                      {ele}
                      {idx != element.time.length - 1 &&
                        element.time.length >= 2 &&
                        "-"}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* right */}
        <div className="bg-dark-400 text-white  px-6 py-12  relative z-0">
          <div
            className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63eb2204c4510c6791589481_Subscribe-bg.png')] absolute left-1/2 -translate-x-1/2 top-1/3 bg-contain bg-no-repeat   -z-10 w-1/2 h-full
          "
          ></div>
          <div className="space-y-4 *:placeholder:text-white *:text-white *:bg-transparent">
            <h4 className="sec-header mb-2">Send Us a Message</h4>
            <p className="text-xs">
              Your email address will not be published .
            </p>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Mail" />
            <Input type="text" placeholder="Subject" />
            <Input type="text" placeholder="Message" />
            <Button variant={"secondary"}>Submit Now </Button>
          </div>
        </div>
      </section>

      {/* 3rd */}
      <section className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63f7404d03c17f4720e123be_Address-Details.jpg')] bg-cover bg-center  ">
        <ul className="grid sm:grid-cols-3 gap-5 sec-wrap">
          {getInTouch.map((element, index) => {
            return (
              <li
                key={element.title}
                className="border-[1px] border-white text-center py-10 px-2 space-y-4"
              >
                <span className="text-main-500 bg-dark-200 rounded-full flex items-center justify-center size-16  m-3 outline-1 outline-dashed outline-white border-8 border-dark-400  text-xl mx-auto ">
                  {<element.icon />}
                </span>
                <h5 className="text-lg font-bold">{element.title}</h5>
                <p className="text-sm text-white/50">{element.desc}</p>
                <span className="text-main-500 text-sm">
                  {(index == 0 || index == 1) &&
                  <Link
                  href={
                    index == 1
                    ? `mailto:${element.info}`
                    : index == 0
                    ? `tel:${element.info}`
                    : `${element.info}`
                  }
                  className="cursor-pointer"
                  >
                    {element.info}
                  </Link>
                  }
                  {index== 2 && `${element.info}`}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 4th */}
      <section className=" text-dark-400 relative ">
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/641bf54ac17bb1d6d8383947_Contact-Faq-02.png')] absolute top-0 inset-x-0 bg-cover bg-center w-full h-full z-0"></div>
        <div className="sec-wrap">
          <div className="text-center">
            <MainComponent subTitle="FAQ" h2="Frequently Asked Questions" />
          </div>
          <div className="w-2/3 mx-auto mt-5 relative z-10 ">
            <Accordion
              type="single"
              collapsible
              className=" divide-y-2 divide-gray-300 divide-dashed"
            >
              {aboutUs.map((element) => {
                return (
                  <AccordionItem key={element.title} value={element.title}>
                    <AccordionTrigger className=" flex items-center justify-between  hover:text-main-500 duration-500 transition-all w-full  p-2 ">
                      <span className="text-base font-black">
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
                    <AccordionContent className="italic pb-3 pe-7 text-sm">
                      {element.desc}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 5th */}
      <section className=" bg-black relative  text-white">
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/641bf54ac17bb1d6d8383947_Contact-Faq-02.png')] absolute top-0 inset-x-0 bg-cover bg-center w-full h-full z-0"></div>
        <div className="sec-wrap grid sm:grid-cols-2  gap-7 relative z-10">
          <div className="py-4">
            <h4 className="sec-header mb-3">About Champion</h4>
            <p className="text-sm mb-4">
              World’s leading sports education brand, providing access and
              professional opportunity for person with an innovative
              programming.
            </p>
            <ul className="space-y-4 mt-10">
              {info.map((element, index) => (
                <li key={element.title} className="flex items-center gap-4 ">
                  <span className=" bg-dark-300 size-10 rounded-full flex items-center justify-center col-span-1 border border-dotted border-main-500">
                    {" "}
                    {<element.icon />}{" "}
                  </span>
                  <span className="flex flex-col text-sm  col-span-2">
                    <span>{element.title}</span>
                    <Link
                      href={
                        index == 1
                          ? `mailto:${element.details}`
                          : `tel:${element.details}`
                      }
                      className="cursor-pointer"
                    >
                      {element.details}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 *:placeholder:text-white *:text-white *:bg-transparent bg-white/20 px-10 py-3 relative z-10">
            <h4 className="sec-header mb-2">Join Our Club</h4>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Mail" />
            <Input type="text" placeholder="Message" />
            <Button variant={"outline-d"} size={"lg"}>
              Subscribe{" "}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
