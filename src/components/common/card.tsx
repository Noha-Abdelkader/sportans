import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

import { EventDetails } from "@/lib/types/events";

import placeholdeImage from "@/assets/images/placeholder.png";
type Props = {
  element: EventDetails;
};

export default function Card(props: Props) {
  return (
    <li className="col-span-1 bg-gray-50  parent-card relative ">
      <div className="overflow-hidden card bg-black/50">
        <Image
          src={props.element.strLeagueBadge ?? placeholdeImage}
          alt={props.element.strEvent ?? ""}
          width={200}
          height={200}
          className="w-full   hover:scale-110 hover:grayscale duration-500 ease-in-out overflow-hidden max-h-[170px] min-h-[170px] "
        />
      </div>
      <p className="bg-dark-400 text-white  flex items-center justify-between text-xs font-bold p-2 lg:p-3 card">
        <span className="flex items-center gap-1">
          <FaCalendarAlt />
          {props.element.dateEvent ?? "---"}
        </span>

        <span className="capitalize">{props.element.strGroup ?? "---"}</span>
      </p>

      <div className="px-1.5">
        <h3 className="font-black text-sm my-1 hover:text-main-500 line-clamp-2 ">
          {props.element.strEvent ?? "---"}
        </h3>
        <p className="text-xs mb-14 line-clamp-2 ">
          {props.element.strFilename ?? "---"}
        </p>

        <div className="absolute bottom-0">
          <Link
            href="/blog/5"
            className="bg-black text-white px-4 py-2.5 text-sm  hover:bg-main-500 duration-300 ease-in-out transition-all my-2 inline-block"
          >
            Read more
          </Link>
        </div>
      </div>
    </li>
  );

  // return (
  //   <li className="col-span-1 bg-gray-50  parent-card ">
  //     <div className="overflow-hidden card ">
  //       <Image
  //         src={props.element.imgUrl}
  //         alt={element.title}
  //         width={200}
  //         height={200}
  //         className="w-full   hover:scale-110 hover:grayscale duration-500 ease-in-out overflow-hidden max-h-[170px] min-h-[170px] "
  //       />
  //     </div>
  //     <p className="bg-dark-400 text-white  flex items-center justify-between text-xs font-bold p-2 lg:p-3 card">
  //       <span className="flex items-center gap-1">
  //         <FaCalendarAlt />
  //         {element.match.date}
  //       </span>

  //       <span className="capitalize">{element.match.league}</span>
  //     </p>

  //     <div className="px-1.5">
  //       <h3 className="font-black text-sm my-1 hover:text-main-500 line-clamp-2 ">
  //         {element.title}
  //       </h3>
  //       <p className="text-xs mb-2 line-clamp-2">{element.description}</p>

  //       <Link
  //         href="/blog/5"
  //         className="bg-black text-white px-4 py-2.5 text-sm  hover:bg-main-500 duration-300 ease-in-out transition-all my-2 inline-block"
  //       >
  //         Read more
  //       </Link>
  //     </div>
  //   </li>
  // );
  // }
}
