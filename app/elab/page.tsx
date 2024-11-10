import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-20">
      <div className="mb-10 mt-10">
        <h1 className="text-[28px] md:text-[40px] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#29a047] to-[#0b2e14]">
          ELAB Challenge
        </h1>
        <p></p>
      </div>

      <div className="flex flex-col gap-20 mb-20">
        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around mb-5 px-5">
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 1</h2>
            <p className="text-[15px] font-normal text-center">
              In this challenge we introduced ourselves, our names, country, fun
              thing our us, why we want to solve the problem and what we are
              contributing to the team.
            </p>
          </div>

          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/ZOwMGWJXtXQ"
              title="E-lab CHALLENGE #1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around  px-5">
          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/vTfNQ531lvs"
              title="E-lab CHALLENGE#2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 2</h2>
            <p className="text-[15px] font-normal text-center">
              We discussed about a community in Rwanda called Kinunu that grows
              and export coffee seed over the world.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around mb-5 px-5">
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 3</h2>
            <p className="text-[15px] font-normal text-center">
              This challenge was about the Help Lap project. we went to a school
              called GSS to pay the students lunch.
            </p>
          </div>

          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/5ZbSYWkAPDM"
              title="E-lab Challenge #3 (Help Lap)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around  px-5">
          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/TKXGoTYFODQ"
              title="E-lab CHALLENGE#4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 4</h2>
            <p className="text-[15px] font-normal text-center">
              In the challenge we went to interview an NGO called SPARK NGO to
              know how they started and the challenges they faced and are
              currently facing.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around mb-5 px-5">
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 5</h2>
            <p className="text-[15px] font-normal text-center">
              In the challenge, we pitched for a grant of $10,000 to develop our idea in the agricultural sector.
            </p>
          </div>

          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/sQebXJfC0qQ"
              title="Challenge #5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              // allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-around  px-5">
          <div className="w-[90%] lg:w-[40em] h-[20em] shadow-2xl">
            <Image src="/elab6.png" alt="" width={500} height={500} className=" w-full h-full object-contain" />
          </div>
          <div className=" w-[90%] lg:w-[40%] flex flex-col items-center justify-center gap-2 shadow-lg rounded-2xl p-10">
            <h2 className="text-[22px] font-medium">Challenge 6</h2>
            <p className="text-[15px] font-normal text-center">
            The challenge is about creating a website to showcase everything we&apos;ve been doing in the E-lab challenge, from the problem statement to the mission and solution            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
