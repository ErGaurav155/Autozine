import AIChatBot from "@/components/ChatBot";
import { ComboBox } from "@/components/ComboBox";
import { OurClientReviev } from "@/components/corousel";
import { HeroSlider } from "@/components/HeroSlider";
import { NavbarWithMegaMenu } from "@/components/Navbar";
import { ArrowBigRight, CrossIcon } from "lucide-react";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex wrapper2  flex-col gap-5 items-center justify-center ">
      <NavbarWithMegaMenu />
      <div className="w-[80%] m-auto text-nowrap flex bg-blue-700 p-4 rounded-3xl text-white items-center justify-between">
        <h1>
          Slick Is Your Digital HQ.Meet the new feature keeping temas connected
          in work-from-anywhere worlds.
        </h1>
        <span className="font-bold text-base text-white  flex ">
          Lets Go
          <ArrowBigRight className="h-5" />
        </span>
        <CrossIcon className="h-10  text-white " />
      </div>
      <HeroSlider />
      <OurClientReviev />
      <ComboBox />
      <AIChatBot />
    </div>
  );
};

export default Home;
