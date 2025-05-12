"use client";

import { LeagueData } from "@/lib/types/league";
import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import ChartPlaceholder from "./chart-placeholder";

type Props = {
  response: LeagueData[];
};

export default function LeagueChart({ response }: Props) {
  return (
    <>
      {response ? (
        <div
          style={{ width: "100%", height: 340 }}
          className=" p-4   md:col-span-9 shadow-md  border-2 border-white  !bg-white !bg-opacity-50 "
        >
          {/* <h4 className="mb-5 text-2xl font-black">Statistics</h4> */}

          <ResponsiveContainer>
            <BarChart
              data={response}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              // className="bg-white bg-opacity-10 "
            >
              <Bar dataKey={"intDivision"} fill="#db350c" radius={3} />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis
                dataKey={"strLeague"}
                angle={0}
                className="text-[10px]"
                stroke="white"
              />
              <YAxis stroke="white" />
              <Tooltip
                cursor={{
                  stroke: "black",
                  strokeWidth: 2,
                  fontSize: 10,
                  fill: "#000",
                }}
                labelClassName="text-black text-xs"
                animationEasing="ease-in-out"
                animationDuration={300}
              />
            </BarChart>
            {/* <AreaChart
          data={response}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"strLeague"} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={"intDivision"}
            stroke="#a8b612"
            fill="#1a6704"
          />
        </AreaChart> */}
          </ResponsiveContainer>
        </div>
      ) : (
        <ChartPlaceholder />
      )}
    </>
  );
}
