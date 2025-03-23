"use client";

import React from "react";
import source from "@/public/slack-salesforce-logo-nav.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const ComboBox = () => {
  const router = useRouter();
  return (
    <section className=" flex  flex-col md:flex-row-reverse items-center justify-center gap-10   w-full">
      <div className="flex flex-col gap-3 items-center md:items-start justify-center w-full md:w-1/2">
        <h1 className="text-xl sm:text-xl md:text-2xl  lg:text-4xl font-bold text-black leading-tight">
          Now is your moment to build better tomorrow
        </h1>

        <span className="text-black">
          we have seen what the future can be.Now it is time to decide what it
          will be.
        </span>
        <div className="flex gap-2 items-center justify-center">
          <button
            className="p-1   md:py-2 md:px-6   text-center font-medium transition bg-white text-[#cf34c5] rounded-md ring-2   ring-[#cf34c5] hover:ring-[#cf34c5]    shadow-lg shadow-[#cf34c5]-500/50 "
            onClick={() => router.push("/product")}
          >
            Watch Video
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2  relative">
        <Image
          className="w-full h-full rounded-lg object-cover"
          src={source}
          alt={`Thumbnail `}
          height={500}
          width={500}
          loading="lazy"
        />
      </div>
    </section>
  );
};
