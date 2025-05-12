import React from "react";
// icons
import { BiSolidError } from "react-icons/bi";

type Props = {
  desc?: string;
};
export function ErrorData({ desc }: Props) {
  return (
    <div className="w-full  h-[200px] px-5 py-7 bg-red-200 rounded-3xl border-2 border-red-700 text-red-700 text-xl   *:flex *:items-center *:gap-2">
      <span className="text-red-900">
        <BiSolidError />
        {desc ? desc : "Error Fetch, please check your network.."}
      </span>
    </div>
  );
}
