"use client";
import Image from "next/image";
import DefaultLayout from "../Layout/DefaultLayout";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import apiService from "@/core/response/apiResponse";

export default function HomeSection() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch API function
  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const response = await apiService.get("/overview/getSingle");
      setProfile(response.data.overview); // Update the profile state
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoading(false); // Set loading to false once the API request completes
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    // Skeleton loader when loading
    return (
      <DefaultLayout>
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          {/* Desktop Skeleton UI */}
          <div className="hidden md:flex animate-pulse">
            <div className="rounded-[20px] w-[200px] h-[250px] bg-slate-700"></div>
            <div className="absolute top-[22px] left-[420px] w-[3px] h-[166px] bg-slate-700"></div>
            <div className="absolute top-[63px] left-[210px] flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-slate-700"></div>
              <div className="w-24 h-4 bg-slate-700 rounded"></div>
            </div>
            <div className="absolute top-[100px] left-[210px] flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-slate-700"></div>
              <div className="w-24 h-4 bg-slate-700 rounded"></div>
            </div>
            <div className="absolute top-[23px] left-[480px] h-4 w-32 bg-slate-700 rounded"></div>
            <div className="absolute top-[100px] left-[480px] w-[150px] h-6 bg-slate-700 rounded"></div>
          </div>

          {/* Mobile Skeleton UI */}
          <div className="md:hidden flex flex-col animate-pulse">
            <div className="relative place-self-center w-[179px] h-[204px] rounded-[20px] bg-slate-700"></div>
            <div className="mb-4 flex flex-row gap-4 place-self-center mt-10">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-slate-700"></div>
                <div className="w-20 h-4 bg-slate-700 rounded"></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded-full bg-slate-700"></div>
                <div className="w-20 h-4 bg-slate-700 rounded"></div>
              </div>
            </div>
            <div className="flex flex-row place-self-center mt-10">
              <div className="relative text-slate-700 h-6 w-40 bg-slate-700 rounded"></div>
              <div className="relative w-[3px] h-[166px] bg-slate-700 rotate-180"></div>
              <div className="relative left-5 h-4 w-32 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <div>
      <DefaultLayout>
        <div className="relative w-full max-w-4xl mx-auto mt-10">
          {/* DEKSTOP UI */}
          <div className="hidden md:flex">
            <Image
              className="absolute left-[-10px] top-0 w-[200px] h-[250px] rounded-[20px] shadow-md object-cover"
              width={200}
              height={250}
              src={profile.photo} // Use the fetched photo URL
              alt="Profile"
            />

            {/* Vertical Divider */}
            <div className="absolute top-[22px] left-[420px] w-[3px] h-[166px] bg-[#041d37] rotate-180 dark:bg-[#1669BE]"></div>

            {/* Bellukchips Info */}
            <div className="absolute top-[63px] left-[210px] flex items-center space-x-2">
              <FaGithub />
              <a
                href={profile.urlGithub}
                className="text-black text-[10px] font-medium dark:text-white"
                target="_blank"
              >
                {profile.githubName} {/* Display the GitHub name */}
              </a>
            </div>

            {/* Name and Title */}
            <div className="absolute top-[100px] left-[210px] flex items-center space-x-2">
              <FaLinkedinIn />
              <a
                href={profile.urlLinkedIn}
                target="_blank"
                className="text-black text-[10px] font-medium dark:text-white"
              >
                {profile.linkedInName} {/* Display the LinkedIn name */}
              </a>
            </div>

            {/* Expertise Text */}
            <div className="absolute top-[23px] left-[480px] text-black text-[15px] font-semibold leading-5 dark:text-white">
              {profile.overview} {/* Display the overview */}
            </div>

            {/* Introduction Header */}
            <div className="absolute top-[100px] left-[480px] text-black text-xl font-extrabold dark:text-white mt-5">
              HI, I’M
              <br />
              {profile.linkedInName} {/* Display the LinkedIn name */}
            </div>
          </div>

          {/* MOBILE UI */}
          <div className="md:hidden flex flex-col">
            <Image
              className="relative place-self-center w-[200px] h-[250px] rounded-[20px] shadow-md object-cover"
              width={200}
              height={250}
              src={profile.photo} // Use the fetched photo URL
              alt="Profile"
            />
            <div className="mb-4 flex flex-row gap-4 place-self-center mt-10">
              {/* Bellukchips Info */}
              <div className="flex items-center space-x-2">
                <FaGithub />
                <span className="text-black text-[10px] font-medium dark:text-white">
                  {profile.githubName} {/* Display the GitHub name */}
                </span>
              </div>
              {/* Name and Title */}
              <div className="flex items-center space-x-2">
                <FaLinkedinIn />
                <span className="text-black text-[10px] w-[100px] md:w-[200px] font-medium dark:text-white">
                  {profile.linkedInName} {/* Display the LinkedIn name */}
                </span>
              </div>
            </div>
            <div className="flex flex-row place-self-center mt-10">
              <div className="flex">
                <div className="relative text-black text-xl font-extrabold dark:text-white">
                  HI, I’M
                  <br />
                  {profile.linkedInName} {/* Display the LinkedIn name */}
                </div>
              </div>
              <div className="flex">
                {/* Vertical Divider */}
                <div className="relative w-[3px] h-[166px] bg-[#041d37] rotate-180 dark:bg-[#1669BE]"></div>
              </div>
              <div className="flex">
                <div className="relative left-5 text-black text-[15px] font-semibold leading-5 dark:text-white">
                  {profile.overview} {/* Display the overview */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
