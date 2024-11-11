import React from "react";
import TeamItems from "./TeamItems";

const TEAMMEMBERS = [
    {
        name: "Gaga Jean Paul",
        role: "Team Lead",
        image: "/gaga.jpg",
        country: "Rwanda",
        link1: "https://www.linkedin.com/in/gaga-jean-paul-bb7a41247/",
        link2: "https://www.instagram.com/gagajeanpaul?utm_source=qr&igsh=M21qd2Q2Z29mdHR0",
    },
    {
        name: "Raissa Gaju ",
        role: "Business Lead",
        image: "/raissa.jpg",
        country: "Rwanda",
        link1: "https://www.linkedin.com/in/raissa-gaju-4152b21bb",
        link2: "https://www.instagram.com/raissa_104?igsh=ZHg2czVoZXlrZmJ6&utm_source=qr",
    },
    {
        name: "Uchechukwu Ezeibe",
        role: "Tech Lead",
        image: "/uche.jpg",
        country: "Nigeria",
        link1: "https://www.linkedin.com/in/uchechukwu-ezeibe-76397522b/",
        link2: "https://www.instagram.com/uchechukwuezeibe/profilecard/?igsh=MTZxZjc4b2U5M2xlZg==",
    },
    {
        name: "Queen Joelle K.H",
        role: "Communication Lead",
        image: "/queen.jpg",
        country: "Rwanda",
        link1: "https://www.linkedin.com/in/queen-joelle",
        link2: "https://www.instagram.com/hirweryakamanzi/profilecard/?igsh=ZjFqNG5ycWV6dG1j",
    },
    {
        name: "Bridget Karungi",
        role: "Social Media Manager",
        image: "/bridget.jpg",
        country: "Rwanda",
        link1: "https://www.linkedin.com/in/",
        link2: "https://www.instagram.com/bridget_ntsinga/profilecard/?igsh=aTN3OXIzZGM0bHYz",
    },
    {
        name: "David Shumbusho",
        role: "Research Lead",
        image: "/david.jpg",
        country: "Rwanda",
        link1: "https://rw.linkedin.com/in/shumbusho-david-71a244206",
        link2: "https://www.instagram.com/baganineza_david/profilecard/?igsh=MXhvaW9xaTVvM3E0aQ==",
    },
]

interface TeamItemsProps {
        name: string;
        role: string;
        image: string;
        country?: string;
        link1: string;
        link2: string;
}


const OurTeam = () => {
  return (
    <div className="flex flex-col bg-[#fcfcfc] gap-4 items-center justify-center py-20 px-10">
      <h1 className="text-[#29a047] font-bold text-[24px]">Our Team</h1>
      <p className="text-[#484d49] text-[16px] text-center font-medium">
        We are Pan-African Agri-Entrepreneurs United to Modernize Rwanda&apos;s Agriculture
        Sector
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
          {TEAMMEMBERS.map((member: TeamItemsProps, index: number) => (
            <TeamItems key={index} props={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
