import React from "react";
// icons
import { IconType } from "react-icons";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  type SocialLinks = {
    href: string;
    icon: IconType;
  };
  const socialLinks: SocialLinks[] = [
    { href: "www.facebook.com", icon: SiFacebook },
    { href: "www.instagram.com", icon: FaInstagram },
    { href: "www.linkedin.com", icon: FaLinkedin },
    { href: "www.twitter.com", icon: FaXTwitter },
  ];
  return (
    <footer className="bg-black  ">
      <div className="sec-wrap !py-7 border-t-2 border-white/50 flex items-center justify-between flex-wrap md:flex-nowrap gap-2 md:gap-0">
        <ul className="flex items-center  gap-3">
          {socialLinks.map((social: SocialLinks) => {
            return (
              <li key={social.href}>
                <Link href={social.href} target="_blank" className="">
                  {
                    <social.icon className=" rounded-full bg-dark-200 size-7 p-1.5 hover:text-main-500 hover:border-main-500 duration-300 ease-in-out" />
                  }
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-sm ">
          Copyright © Sportans | Designed by VictorFlow - Powered by Webflow.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
