"use client";

import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { OurClient, OurClient2 } from "@/components/corousel";
import { useRouter } from "next/navigation";

export const HeroSlider = () => {
  const router = useRouter();
  return (
    <section className=" flex flex-col md:flex-row items-center justify-center gap-2   w-full">
      <div className="flex flex-col gap-3 items-center md:items-start justify-center w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-bold text-black leading-tight">
          Slack is where The Future Works
        </h1>

        <span className="text-black">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done
        </span>
        <div className="flex gap-2 items-center justify-center">
          <button
            className="p-1   md:py-2 md:px-6   text-center font-medium transition bg-purple-800 text-white rounded-md ring-2   ring-[#88e2bb] hover:ring-[#88e2bb]    shadow-lg shadow-[#88e2bb]-500/50 "
            onClick={() => router.push("/product")}
          >
            Try for free
          </button>

          <button
            className="p-1   md:py-2 md:px-6   text-center font-medium transition bg-blue-800 text-white rounded-md ring-2   ring-[#88e2bb] hover:ring-[#88e2bb]    shadow shadow-[#88e2bb]-500/50 "
            onClick={() => router.push("/OurService")}
          >
            Sign Up with Google
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2  relative">
        <div className="absolute top-0 left-0 w-full h-full shadow-left-right-blur  rounded-md z-5"></div>

        <OurClient />
        <OurClient2 />
      </div>
    </section>
  );
};
