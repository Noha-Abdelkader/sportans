import Landing from "@/components/common/landing";
import Navbar from "../_components/Navbar";
import { ReactNode } from "react";

export default function BlogLayout({ children }: Readonly<{ children: ReactNode }>) {

  return <main>
    {/* 1st */}
    <section>
      <Landing>
        <div className="bg-[url('https://assets-global.website-files.com/63c10e746e818183b41808a0/63edfb938523a50cbf59766c_Blog.jpg')] bg-cover bg-center ">
          <Navbar />
          <div className="flex items-center justify-center  min-h-[40dvh]">
            <h1 className="text-4xl font-bold ">Latest News</h1>
          </div>
        </div>
      </Landing>
    </section>
    {children}
  </main>;
}
