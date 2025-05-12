// import Card from "@/components/common/card";
import NewsCard from "@/components/common/news-card";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const list = [
  "It brings the right people together with all the right information and tools to get work done",
  "We provide operational efficiency, data security, and flexible scale",
  "Your best work, together in one package that works seamlessly from your computer",
  "Delivers the tools you need to save time Improve field performance always",
];

const lists = [
  "Dynamically target high-payoff intellectual capital for customized",
  "Interactively procrastinate high-payoff content",
  "Credibly reinter mediate backend ideas for cross-platform models",
];

const data = [
  {
    src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f7949ff87ad04453097_Blog-post-01-p-500.jpg",
    date: "8/4/2025",
    type: "club",
    title: "Why Regular Yoga Practice Improves Sports Performance",
    info: "Strategies on low-hanging fruit to identify a ballpark value added activity the value.",
    link: "",
  },
  {
    src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f82097e20a89107f0aa_Blog-post-02.jpg",
    date: "5/4/2025",

    type: "Football",
    title: "Discusses Athlete Wellness with Muscle & Fitness With Our Coaches",
    info: "Capitalize on low-hanging fruit to identify a ballpark value-added matrix digital",
    link: "",
  },
  {
    src: "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63edf6019029ffdaf70efa4f_Blog-post-07-p-500.jpg",
    date: "28/3/2025",

    type: "Football",
    title: "Soccer schools enabling high performance pathways with Sportans",
    info: "Following the quality of our service thus having gained trust of our many clients.",
    link: "",
  },
];

const gallery = [
  "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3fa0aecb7275240198fa_Blog-post-04-p-500.jpg",
  "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63ee09caa8f340fe410f68c3_Blog-post-05-p-500.jpg",
  "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f7949ff87ad04453097_Blog-post-01-p-500.jpg",
  "https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63edf6019029ffdaf70efa4f_Blog-post-07-p-500.jpg",
];
function Page() {
  return (
    <section className="sec-wrap sec-flex !items-start gap-6 *:w-full  text-dark-400">
      {/* left */}
      <div className="md:w-[55%] space-y-4">
        <Image
          src="https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/63eb3f82097e20a89107f0aa_Blog-post-02.jpg"
          alt="sports"
          width={200}
          height={200}
          className="w-full"
        />
        <p className="  flex items-center justify-between text-xs font-bold  bg-gray-100 px-2">
          <span className="flex items-center gap-1">
            <FaCalendarAlt />
            30/10
          </span>

          <span className="capitalize bg-dark-400 text-white p-2">
            Football
          </span>
        </p>
        <p>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>

        <Image
          src="https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/642be66c60acb974eece623e_Blog-single-rich-01.jpg"
          alt="sports"
          width={200}
          height={200}
          className="w-full"
        />

        <p>
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </p>

        <ul className="list-disc list-inside text-sm text-dark-200">
          {list.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>

        <h4 className="mt-4 font-bold text-lg">
          Defeat to Beavers Despite Dominating
        </h4>
        <p>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>

        <Image
          src="https://cdn.prod.website-files.com/63eb33379d6ee82e4deb16ce/642be67993803185981cec29_Blog-single-rich-02.jpg"
          alt="sports"
          width={200}
          height={200}
          className="w-full"
        />

        <ul className="list-inside list-decimal text-dark-200 text-sm">
          {lists.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>

        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring
        </p>

        <hr />

        {/* <h5 className="mt-4 font-bold text-lg">Related Posts</h5>
        <ul className="grid  sm:grid-cols-2 gap-4 ">
          {data.map((element , index) => (
            <Card key={index} element={element} />
          ))}
        </ul> */}
      </div>
      {/* right */}

      <div className="md:w-[45%]">
        <h4 className="text-lg font-bold mb-4">Latest News</h4>
        <ul className=" space-y-4">
          {data.map((element , index) => (
            <NewsCard key={index} element={element} />
          ))}
        </ul>

        <h4 className="text-lg font-bold mb-4 mt-7 header-after-effect capitalize sec-header">gallery</h4>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 bg-gray-100 py-4 px-2 ">
          {gallery.map((element) => (
            <li key={element} className="col-span-1">
              <Image src={element} alt="gallery" width={200} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Page;
