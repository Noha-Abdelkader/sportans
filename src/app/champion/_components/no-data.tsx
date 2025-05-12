import React from "react";
// icons
import { PiSealWarningFill } from "react-icons/pi";

type Props = {
  title?: string;
};
function NoData({ title }: Props) {
  return (
    <div className="w-full   h-[200px] px-5 py-7 bg-yellow-200 rounded-3xl *:text-yellow-700 text-3xl  *:flex *:items-center *:gap-2">
      <span>
        <PiSealWarningFill />
        {title
          ? `
        No ${title} Found .
        `
          : "No data found"}
      </span>
    </div>
  );
}

export default NoData;
