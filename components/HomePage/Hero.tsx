import React from "react";

const Hero = () => {
  return (
    <div className=" bg-[#fff] hero-bg flex items-center justify-center px-5 sm:px-10 lg:px-20 py-20 w-full h-fit  md:h-[26em]  ">
      <div className=" md:w-[90%] lg:w-[80%] flex flex-col items-center gap-3 ">
        <h1 className=" text-center text-[#000] font-extrabold text-[30px] md:text-[50px] lg:text-[60px]">
          Innovating <span className="text-[#29a047] ">Agriculture </span>
          to Create Jobs
        </h1>

        <p
          className={`
            text-[14px] sm:text-[16px] text-center font-semibold w-[100%] text-[#194925]`}
        >
          Empowering the Future Workforce through Sustainable Innovation
        </p>
      </div>
    </div>
  );
};

export default Hero;
