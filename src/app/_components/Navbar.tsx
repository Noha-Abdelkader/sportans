"use client";

import React from "react";

// icons
import { FaBasketball, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

// components
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./login-form";

export default function Navbar() {
  // state
  // const [openNav, setOpenNav] = useState(false);

  //   links
  type NavLinks = {
    title: string;
    href: string;
    sub?: NavLinks[];
  };
  const navLinks: NavLinks[] = [
    { title: "home", href: "/" },
    { title: "about us", href: "/about" },
    { title: "pricing", href: "/pricing" },
    {
      title: "activity",
      href: "/activity",
      sub: [
        { title: "events", href: "/events" },
        { title: "membership", href: "/member" },
        { title: "champions", href: "/champion" },
      ],
    },
    { title: "blog", href: "/blog" },
    { title: "contact", href: "/contact" },
  ];

  // social links
  const socialLinks = [
    { link: "www.instagram.com", icon: FaInstagram },
    { link: "www.facebook.com", icon: FaFacebook },
    { link: "www.twitter.com", icon: FaXTwitter },
    { link: "www.linkedin.com", icon: FaLinkedin },
  ];

  return (
    <nav className="">
      <div className="bg-black text-white ">
        {/* top nav */}
        <div className="p-2   sm:w-[90%] mx-auto flex items-center justify-between flex-wrap md:flex-nowrap gap-4 py-2  text-sm text-white">
          <div className="*:flex *:items-center *:justify-center *:gap-2  flex items-center gap-2 md:gap-5 [&_svg]:text-sm flex-wrap md:flex-nowrap  text-xs">
            <Link href="tel:0123456789" className="sec-hover">
              <FaPhoneAlt />
              0123456789
            </Link>
            <Link href="mailto:sportans@sportsculb.com" className="sec-hover">
              <MdEmail />
              sportans@sportsculb.com
            </Link>
            <span className="sec-hover">
              <FaLocationDot />
              4961 Pine Tree Lane, Maryland.
            </span>
          </div>
          {/* social */}
          <ul className="flex items-center justify-center md:justify-start gap-5 w-full sm:w-auto ">
            {socialLinks.map((element) => (
              <li key={element.link} className="sec-hover">
                <Link href={element.link}>{<element.icon />}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* nav */}
      <div className="border-b-[1px] border-white/70 py-3  px-10 font-semibold font-jura flex items-center justify-between  *:items-center *:justify-between *:gap-2  sec-wrap">
        {/* logo */}
        <Link href={"/"} className="text-2xl flex ">
          <FaBasketball />
          <h1>Sportans</h1>
        </Link>

        {/* links */}
        {/* web view */}
        <NavigationMenu className={`hidden  md:flex`}>
          <NavigationMenuList>
            {navLinks.map((nav) => {
              return (
                <NavigationMenuItem key={nav.title}>
                  {nav.sub && nav.sub?.length >= 1 ? (
                    <>
                      <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-full *:py-2 ps-5 ">
                          {nav.sub.map((sub) => (
                            <li key={sub.title}>
                              <Link
                                href={sub.href}
                                className="capitalize text-main-500 hover:underline duration-200 ease-in-out transition-all !cursor-pointer"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={nav.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {nav.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* btn */}
        <div className="hidden  md:flex">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader className="text-black ">
                <DialogTitle className="  text-3xl font-black relative before:content-'' before:w-1 before:h-16 before:bg-main-500 before:absolute before:top-0 before:-left-3">
                  Login
                </DialogTitle>
                <DialogDescription>
                  Please enter your mail and password
                </DialogDescription>
              </DialogHeader>
              <LoginForm />
            </DialogContent>
          </Dialog>

          <Link href="/contact">
            <Button variant="outline">Join our team</Button>
          </Link>
        </div>

        {/* mobile view */}

        <div className="flex  md:hidden">
          <Sheet>
            <SheetTrigger>
              <HiOutlineMenuAlt3 className="text-3xl" />
            </SheetTrigger>
            <SheetTitle className="sr-only">navbar list</SheetTitle>
            <SheetContent>
              <ul className="w-full text-white divide-y-[1px] divide-gray-50   *:py-3 min-h-[80dvh]">
                {navLinks.map((nav) => (
                  <li key={nav.title}>
                    {nav.sub && nav.sub?.length >= 1 ? (
                      <>
                        <Accordion type="single" collapsible>
                          <AccordionItem value={nav.title}>
                            <AccordionTrigger className="flex items-center justify-between capitalize  ">
                              {nav.title}
                              <MdOutlineKeyboardArrowDown />
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="w-full *:py-2 ps-5 ">
                                {nav.sub.map((sub) => (
                                  <li key={sub.title}>
                                    <Link
                                      href={sub.href}
                                      className="capitalize text-main-500 hover:underline duration-200 ease-in-out transition-all cursor-pointer"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                              <Link href="/contact">
                                <Button
                                  className="hidden  md:flex"
                                  variant="outline"
                                >
                                  Join our team
                                </Button>
                              </Link>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </>
                    ) : (
                      <span className="capitalize inline-block hover:text-main-500 duration-200 ease-in-out transition-all cursor-pointer">
                        {nav.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="block w-full">Login</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader className="text-black ">
                      <DialogTitle className="  text-3xl font-black relative before:content-'' before:w-1 before:h-16 before:bg-main-500 before:absolute before:top-0 before:-left-3">
                        Login
                      </DialogTitle>
                      <DialogDescription>
                        Please enter your mail and password
                      </DialogDescription>
                    </DialogHeader>
                    <LoginForm />
                  </DialogContent>
                </Dialog>
                 
                <Link href="/contact" className="block w-full">
                  <Button variant="outline" className="w-full">
                    Join our team
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
