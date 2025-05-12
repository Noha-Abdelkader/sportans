import Image from "next/image";
import Link from "next/link";

type Props = {
  element: {
    src: string;
    date: string;
    title: string;
    info: string;
  };
};

export default function NewsCard({
  element: { src, date, title, info },
}: Props) {
  return (
    <li className="col-span-1 bg-gray-100  grid grid-cols-3 px-4 py-5 gap-4  ">
      <Image
        src={src}
        alt={title}
        width={200}
        height={200}
        className="w-full   col-span-1"
      />
      <div className="col-span-2">
        {/* <p className="text-xs mb-2 font-bold text-dark-200">
          By {title ?? "Why Regular Yoga Practice Improves Sports Performance"}
        </p> */}
        <p className="text-xs mb-2 font-bold"> {info ?? "8/4/2025"}</p>

        <div className="flex items-center justify-between text-xs">
          <span>
            {date ??
              "Strategies on low-hanging fruit to identify a ballpark value added activity the value."}
          </span>

          <Link
            href="/blog/5"
            className="text-main-500 underline underline-offset-2  capitalize cursor-pointer hover:text-dark-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </li>
  );
}
