import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

interface TeamItemsProps {
    props: {
        name: string;
        role: string;
        image: string;
        country?: string;
        link1: string;
        link2: string;
    }
}

const TeamItems: React.FC<TeamItemsProps> = ({props} ) => {
  return (
    <div className=" overflow-hidden relative w-[14em] h-[18em] bg-[#f7f5f5] shadow-lg flex flex-col gap-4 items-center justify-center rounded-2xl border border-[#1e75343d] border-solid group">
      <div className="w-[10em] h-[10em] shadow-md overflow-hidden rounded-full border border-[#dfdddd] border-solid">
        <Image
          src={props.image}
          alt={props.name}
          width={500}
          height={500}
          className=" "
        />
      </div>
      <div className="flex flex-col items-center gap-2">
      <h3 className="text-[16px] text-[#121312] font-medium">{props.name}</h3>
      <p className="text-[14px] text-[#808180] font-medium">{props.role}</p>
      <p className="text-[14px] text-[#484d49] font-medium">{props.country}</p>
      </div>

      <div className="absolute  bottom-[-3.5rem] h-14 w-full flex gap-4 items-center justify-center bg-[#2c2b2be5] text-[#fff] text-[24px] transform transition-transform duration-300 ease-in-out group-hover:translate-y-[-3.5rem]">
        <Link href={props.link2} className=" hover:text-[#29a047] text-[24px]"><FaInstagram/></Link>
        <Link href={props.link1} className=" hover:text-[#29a047] text-[24px]"><FaLinkedin/></Link>
      </div>
    </div>
  );
};

export default TeamItems;
