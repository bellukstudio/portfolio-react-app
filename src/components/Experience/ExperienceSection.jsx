"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import apiService from "@/core/response/apiResponse";

export default function ExperienceSection() {
  const [experience, setExperience] = useState([]);
  const [loadingExperience, setLoadingExperience] = useState(true);

  const fetchExperienceData = async () => {
    try {
      setLoadingExperience(true);
      const response = await apiService.get("/experiences");
  
      // Check if the response code is 200 and if 'experiences' exists and has data
      if (response.meta.code !== 200 || !response.data.experiences || response.data.experiences.length === 0) {
        setExperience([]);
      } else {
        setExperience(response.data.experiences);
      }
    } catch (error) {
      console.error("Error fetching experience data:", error);
    } finally {
      setLoadingExperience(false);
    }
  };
  

  useEffect(() => {
    fetchExperienceData();
  }, []);

  return (
    <div>
      <DefaultLayout>
        <div className="w-full mx-auto h-auto relative ">
          {/* Dekstop UI */}
          <div className="hidden md:flex">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <div className="left-[50px] top-[72px] absolute text-center text-black text-5xl font-extrabold font-['Montserrat'] dark:text-white">
                  MY <br />
                  EXPERIENCES
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="w-[400px] h-[400px] right-0 top-0 absolute">
                  <div className="w-[400px] h-[400px] left-[-50px] top-[8px] absolute">
                    <Image
                      className="absolute"
                      src={"/backdrop.png"}
                      height={400}
                      width={400}
                      alt="backdrop"
                    />
                  </div>
                  <Image
                    className="w-[300px] h-[244px] left-2 top-0 absolute"
                    src={"/man-working.png"}
                    height={244}
                    width={300}
                    alt="man-working"
                  />
                </div>
              </div>
            </div>

            {/* New Work Experience Data Section */}
            <div className="w-full mt-60 left-0 mb-16">
              <div className="w-full h-full relative flex flex-col">
                {/* Experience loading skeleton */}
                {loadingExperience ? (
                  <div className="space-y-8">
                    {/* Skeleton for each experience item */}
                    {[1, 2].map((_, index) => (
                      <div key={index} className="w-[526px] animate-pulse">
                        <div className="h-6 bg-slate-700 rounded w-[150px] mx-auto mb-4"></div>
                        <div className="h-4 bg-slate-700 rounded mb-5"></div>
                        <div className="h-4 bg-slate-700 rounded w-[90%] mx-auto mb-4"></div>
                        <div className="flex space-x-4">
                          <div className="h-[200px] bg-slate-700 rounded w-[50%]"></div>
                          <div className="h-[200px] bg-slate-700 rounded w-[50%]"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Actual experience content
                  experience.map((exp, index) => (
                    <div key={index} className="w-[526px]">
                      <div className="text-center text-black text-base font-extrabold font-['Montserrat'] dark:text-white">
                        {exp.company} ({exp.startMonth} {exp.finishMonth}
                        )
                        <br /> {exp.jobTitle}
                      </div>
                      <div className="w-[18px] h-[17px] left-[-8px] top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                      <div className="flex flex-row xl:flex-row mb-5">
                        <div className="flex w-full space-x-4">
                          <div className="w-[3px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                          <div className="flex-1">
                            <div className="w-[482px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                              {exp.overview.split("\n").map((line, index) => {
                                // Handle bold text
                                if (line.includes("**")) {
                                  const parts = line
                                    .split("**")
                                    .filter(Boolean);

                                  return (
                                    <div key={index}>
                                      <br />
                                      <br />
                                      {parts.map((part, idx) => (
                                        <span
                                          key={idx}
                                          className={
                                            idx % 2 === 0 ? "" : "font-bold"
                                          }
                                        >
                                          {part}
                                        </span>
                                      ))}
                                      <br />
                                      <br />
                                    </div>
                                  );
                                }

                                // Handle lines starting with '-'
                                if (line.startsWith("-")) {
                                  const listItem = line.slice(1).trim();
                                  return (
                                    <div key={index}>
                                      <ul className="list-disc">
                                        <li>{listItem}</li>
                                      </ul>
                                    </div>
                                  );
                                }

                                return <div key={index}>{line}</div>;
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex flex-col">
            <div className="place-self-center top-[72px] relative text-center text-black text-5xl font-extrabold font-['Montserrat'] dark:text-white">
              MY <br />
              EXPERIENCES
            </div>
            <div className="w-[400px] h-[400px] top-[100px] place-self-center relative ml-28">
              <div className="w-[400px] h-[400px] left-[-50px] top-[8px] absolute">
                <Image
                  className="absolute"
                  src={"/backdrop.png"}
                  height={400}
                  width={400}
                  alt="backdrop"
                />
              </div>
              <Image
                className="w-[300px] h-[244px] left-2 top-0 absolute"
                src={"/man-working.png"}
                height={244}
                width={300}
                alt="man-working"
              />
            </div>

            <div className="w-full mt-40 mb-16">
              <div className="w-full h-full relative flex flex-col">
                {loadingExperience ? (
                  <div className="w-[526px] animate-pulse">
                    <div className="h-6 bg-gray-300 rounded w-[150px] mx-auto mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-5"></div>
                    <div className="h-4 bg-gray-300 rounded w-[90%] mx-auto mb-4"></div>
                  </div>
                ) : (
                  experience.map((exp, index) => (
                    <div key={index} className="w-[526px]">
                      <div className="text-center text-black text-base font-extrabold font-['Montserrat'] dark:text-white">
                        {exp.company} ({exp.startMonth} {exp.finishMonth}
                        )
                        <br /> {exp.jobTitle}
                      </div>
                      <div className="w-[18px] h-[17px] left-[-8px] top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                      <div className="flex flex-row xl:flex-row mb-5">
                        <div className="flex w-full space-x-4">
                          <div className="w-[3px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                          <div className="flex-1">
                            <div className="w-full max-w-[400px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                              {exp.overview.split("\n").map((line, index) => {
                                // Handle bold text
                                if (line.includes("**")) {
                                  const parts = line
                                    .split("**")
                                    .filter(Boolean);

                                  return (
                                    <div key={index} className="mb-2">
                                      <br />
                                      {parts.map((part, idx) => (
                                        <span
                                          key={idx}
                                          className={
                                            idx % 2 === 0 ? "" : "font-bold"
                                          }
                                        >
                                          {part}
                                        </span>
                                      ))}
                                      <br />
                                    </div>
                                  );
                                }

                                // Handle lines starting with '-'
                                if (line.startsWith("-")) {
                                  const listItem = line.slice(1).trim();
                                  return (
                                    <div key={index}>
                                      <ul className="list-disc pl-5">
                                        <li>{listItem}</li>
                                      </ul>
                                    </div>
                                  );
                                }

                                // Default case for normal text
                                return (
                                  <div key={index} className="break-words">
                                    {line}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
