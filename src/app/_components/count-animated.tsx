"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

// Sample date info
type DateInfo = {
  date?: number;
  month?: number;
  year?: number;
}[];

const dateInfo: DateInfo = [{ date: 12 }, { month: 12 }, { year: 25 }];


// funtion animation
type Props = {
  count: number;
};

function Counter({ count }: Props) {
  const value = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(value, count, {
      duration: 2,
      onUpdate: (v) => setCurrent(Math.floor(v)),
    });

    return () => controls.stop();
  }, [count, value]);

  return <motion.span>{current}</motion.span>;
}
export default function CountAnimated() {
  return (
    <div className="flex items-center justify-center gap-10">
      {dateInfo.map((ele, idx) => {
        const label = Object.keys(ele)[0];
        const number = Number(Object.values(ele)[0]);

        return (
          <div key={idx} className="flex flex-col items-center text-dark-400">
            <span className="text-dark-300 text-2xl capitalize font-bold">
              {label}
            </span>
            <span className="text-5xl font-black opacity-90">
              <Counter count={number} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
