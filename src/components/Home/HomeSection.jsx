"use client"
import Image from "next/image";
import DefaultLayout from "../Layout/DefaultLayout";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function HomeSection() {
  return (
    <div>
      <DefaultLayout>
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          {/* Left Profile Image */}
          <Image
            className="absolute left-0 top-0 w-[179px] h-[204px] rounded-[20px] shadow-md"
            width={200}
            height={250}
            src="https://via.placeholder.com/200x250"
            alt="Profile"
          />

          {/* Vertical Divider */}
          <div className="absolute top-[22px] left-[420px] w-[3px] h-[166px] bg-[#041d37] rotate-180 dark:bg-[#1669BE]"></div>

          {/* Bellukchips Info */}
          <div className="absolute top-[63px] left-[210px] flex items-center space-x-2">
            <FaGithub />
            <span className="text-black text-[10px] font-medium dark:text-white">
              Bellukchips
            </span>
          </div>

          {/* Name and Title */}
          <div className="absolute top-[100px] left-[210px] flex items-center space-x-2">
            <FaLinkedinIn/>
            <span className="text-black text-[10px] font-medium dark:text-white">
              Muh. Lukman Akbar <br />
              Prihandoyo
            </span>
          </div>

          {/* Expertise Text */}
          <div className="absolute top-[23px] left-[480px] text-black text-[15px] font-semibold leading-5 dark:text-white">
            Expertise in mobile, web, and backend <br />
            development. Delivering exceptional solutions.
          </div>

          {/* Introduction Header */}
          <div className="absolute top-[100px] left-[480px] text-black text-xl font-extrabold dark:text-white">
            HI, I’M
            <br />
            Muh. Lukman Akbar Prihandoyo
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
