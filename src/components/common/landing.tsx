"use client";
import React from "react";
import {motion} from "framer-motion"


import {
  FaFootballBall,
  FaFlagCheckered,
} from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiSealCheckBold } from "react-icons/pi";


type Props = {
  children: React.ReactNode;

};
function Landing({children } :Props) {

  return (
    <section className="text-white bg-black ">
      {children}

      <div
      className="bg-black text-white p-2   font-semibold  overflow-hidden  ">
        {/* <TextTyping
            selectedText={[
              `<p>
              <FaFlagCheckered className="text-yellow-600 text-lg" />
              Create History
            </p>`,
              ` <p>
              <PiSealCheckBold className="text-green-800 text-lg" />
              Play Powerfull
            </p>`,
            ]}
          /> */}
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear"  , }}
          style={{ whiteSpace: "nowrap" }}
        >
          {/* line scroll */}
          <div
          className="effect-scrol *:flex *:items-center *:justify-center *:gap-4 *:text-nowrap flex items-center gap-16 ">
            <p>
              <FaFootballBall className="text-main-500 text-lg" />
              Lace Up & Dont Stop
            </p>
            <p>
              <FaFlagCheckered className="text-yellow-600 text-lg" />
              Create History
            </p>
            <p>
              <PiSealCheckBold className="text-green-800 text-lg" />
              Play Powerfull
            </p>
            <p>
              <TfiCup className="text-yellow-400 text-lg" />
              MAKE A DIFFERENCE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Landing