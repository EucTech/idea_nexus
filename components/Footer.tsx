"use client";
import moment from "moment/moment";
import { footerLinks, socialMedia } from "@/ultils/constants";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import {roboto} from "./font";

const Footer = () => {
  const router = useRouter();

  return (
    <div>
      <section className={`py-10  sm:pt-10 bg-[#194925] pl-5 ${roboto.className}`}>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              {/* <div className=" h-auto flex items-start flex-col gap-5 justify-center"> */}
              <Link href={"/"}>
                <div className="flex items-center  gap-4">
                  <Image
                    src="/logo.png"
                    alt="Realcousins Logo"
                    width={400}
                    height={400}
                    className=" w-[10em] rounded-md"
                    priority={true}
                  />

                </div>
              </Link>
              {/* </div> */}
            </div>

            {footerLinks.map((section, index) => (
              <div key={index}>
                <p className="text-sm font-semibold tracking-widest text-[#FFFF] uppercase">
                  {section.title}
                </p>

                <ul className="mt-6 flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url.startsWith("http") ||
                      link.url.startsWith("https") ? (
                        <a
                          href={link.url}
                          title={link.text}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex text-base text-[#E6E6E6] transition-all duration-200 cursor-pointer hover:text-[#9b9999] focus:text-colorOrange"
                        >
                          {link.text}
                        </a>
                      ) : (
                        <a
                          onClick={() => router.push(link?.url)}
                          title={link.text}
                          className="flex text-base text-[#E6E6E6] transition-all duration-200 cursor-pointer hover:text-[#9b9999] focus:text-colorOrange"
                        >
                          {link.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <div className="flex flex-col gap-3">

                <p className="text-white flex items-center gap-2">
                  <FaLocationDot />
                  <span className="text-[#E6E6E6]">
                    Alu Campus
                  </span>
                </p>

              </div>
              <ul className="flex items-center space-x-3 mt-5">
                {socialMedia.map((socialItem) => (
                  <li key={socialItem.id}>
                    <a
                      href={socialItem.link}
                      title=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-colorOrange focus:bg-colorOrange"
                    >
                      <socialItem.icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-sm md:text-center text-[#E6E6E6]">
              Copyright © {moment().format("YYYY")}, Idea Nexus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
