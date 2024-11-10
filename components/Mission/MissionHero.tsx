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
          Although 78% of Rwanda&apos;s workforce is in agriculture, reliance on
          traditional methods limits innovation, job diversity, and economic
          impact. Modernizing the sector could create 200,000 jobs and promote
          local food consumption by 2035.
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
        To transform Rwanda&apos;s agricultural sector by implementing sustainable composting initiatives that improve soil health, boost crop yields, and create 20,000 local jobs.
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
          up to 20,000 new jobs in composting, packaging, and distribution, with
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
