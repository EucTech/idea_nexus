import Image from "next/image";
import React from "react";
import { MdOutlineReportProblem } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

const MissionHero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 mt-5">
      <h1 className=" text-[28px] md:text-[40px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#29a047] to-[#0b2e14]">
        WE ARE IDEA NEXUS
      </h1>

      <div className=" md:w-[60%] px-5 flex flex-col gap-4 items-center justify-center mt-10">
        <span className="flex items-center justify-center gap-3 bg-[#e4e3e3] py-1 px-4 rounded-lg">
          <MdOutlineReportProblem className="text-[24px] text-[#29a047]" />
          <h2 className="text-[#0b2e14] text-[22px] font-bold">
            Problem Statement
          </h2>
        </span>

        <p className="text-[#474747] text-[15px] font-normal text-center">
        Could establishing local compost production units promote sustainable farming and create 1,000 new jobs by 2030 while strengthening Rwanda&apos;s food security and economy?
        </p>

        <Image
          src="/localfarmers.jpg"
          alt="Local Farmers"
          width={500}
          height={500}
          className="w-[90%] rounded-xl"
        />
      </div>

      <div className=" md:w-[60%] px-5 flex flex-col gap-4 items-center justify-center mt-10 mb-14">
        <span className="flex items-center justify-center gap-3 bg-[#e4e3e3] py-1 px-4 rounded-lg">
          <TbTargetArrow className="text-[24px] text-[#29a047]" />
          <h2 className="text-[#0b2e14] text-[22px] font-bold"> Mission</h2>
        </span>
        <p className="text-[#474747] text-[15px] font-normal text-center">
        Idea Nexus&apos;s mission is to create diverse job opportunities within the agricultural sector for our generation in their respective areas of expertise to ensure an  innovative, adaptable and impactful  system of agriculture in the community
        </p>

        <Image
          src="/mission.png"
          alt="Local Farmers"
          width={500}
          height={500}
          className=" w-[90%] h-[25em] object-cover rounded-xl"
        />
      </div>

      <div className=" md:w-[60%] px-5 flex flex-col gap-4 items-center justify-center mt-10 mb-14">
        <span className="flex items-center justify-center gap-3 bg-[#e4e3e3] py-1 px-4 rounded-lg">
          <TbTargetArrow className="text-[24px] text-[#29a047]" />
          <h2 className="text-[#0b2e14] text-[22px] font-bold"> Solution</h2>
        </span>
        <p className="text-[#474747] text-[15px] font-normal text-center">
          Our business aims to modernize Rwanda&apos;s agriculture by establishing
          local compost production units that provide sustainable, organic
          fertilizers to improve soil health and crop yields. This will create
          up to 1000 new jobs in composting, packaging, and distribution, with
          a focus on training youth and farmers.
        </p>

        <Image
          src="/solution.png"
          alt="Local Farmers"
          width={500}
          height={500}
          className=" w-[90%] rounded-xl"
        />
      </div>

      
    </div>
  );
};

export default MissionHero;
