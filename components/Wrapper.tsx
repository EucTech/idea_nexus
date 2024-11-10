"use client";
import React from "react";
import Navbar from "./Navbar";
// import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { Roboto } from "next/font/google";

interface WrapperProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
  variable: "--font-roboto", // Custom CSS variable for Roboto
});

const Wrapper = ({ children }: WrapperProps) => {
  // const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className={`${roboto.className}`}>{children}</div>
      <Footer />
    </>
  );
};

export default Wrapper;
