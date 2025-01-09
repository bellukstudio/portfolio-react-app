"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import apiService from "@/core/response/apiResponse";
export default function PortfolioSection() {
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [education, setEducation] = useState([]);

  const calculateAge = (birthDate) => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth() - birthDateObj.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };
  const fetchProfile = async () => {
    try {
      setLoadingProfile(true);
      const response = await apiService.get("/myprofile/getSingle");

      if (response.meta.code === 200) {
        setProfile(response.data.profile);

        const educationResponse = await apiService.get("/education");

        // Check if the response code is 200 and if 'education' data exists
        if (
          educationResponse.meta.code !== 200 ||
          !educationResponse.data.education ||
          educationResponse.data.education.length === 0
        ) {
          setEducation([]);
        } else {
          setEducation(educationResponse.data.education);
        }
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoadingProfile(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loadingProfile) {
    return (
      <div>
        <DefaultLayout>
          <div className="w-full h-[100vh] md:h-[536px] absolute animate-pulse">
            {/* Desktop Skeleton UI */}
            <div className="hidden md:flex">
              <div className="w-full h-[613px] left-0 top-[3px] absolute bg-slate-700 animate-pulse"></div>
              <div className="w-full h-full left-0 top-0 absolute bg-black/70"></div>
              <div className="w-[222px] h-[258px] left-[54px] top-[117px] absolute bg-slate-700 animate-pulse"></div>
              <div className="w-[358px] h-[174px] left-[315px] top-[117px] absolute">
                <div className="left-[1px] top-0 absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[1px] top-[40px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[1px] top-[80px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-0 top-[119px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-0 top-[158px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[132px] top-0 absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[132px] top-[40px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[132px] top-[80px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[132px] top-[119px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                <div className="left-[131px] top-[159px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <div className="w-[500px] h-[72px] left-0 ml-10 top-[396px] absolute">
                    <div className="w-[350px] xl:w-[500px] h-[15px] left-0 top-[30px] absolute text-justify text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse"></div>
                  </div>
                </div>
                <div className="w-full xl:w-1/2">
                  <div className="w-[300px] h-[72px] right-0 mr-10 top-[396px] absolute">
                    <div className="w-[300px] h-[15px] left-0 top-[30px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse"></div>
                    <div className="w-[300px] h-[15px] left-0 top-[57px] absolute text-center text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse"></div>
                    <div className="left-[175px] top-0 absolute text-center text-white text-xs font-medium font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Skeleton UI */}
            <div className="md:hidden">
              <div className="w-full h-[100vh] left-0 top-[3px] absolue mt-[100px] bg-slate-700 animate-pulse"></div>
              <div className="w-full h-full left-0 top-0 absolute bg-black/70 mt-[100px]"></div>
              <div className="flex flex-col">
                <div className="w-[240px] h-[280px] top-[117px] relative place-self-center bg-slate-700 animate-pulse"></div>
                <div className="w-[358px] h-[174px] place-self-center top-[170px] relative flex flex-col justify-between text-white text-xs font-light font-['Montserrat']">
                  <div className="flex justify-between">
                    <span className="text-right w-[100px] font-extrabold bg-slate-700 animate-pulse h-[15px] w-[100px]"></span>
                    <span className="text-left w-[200px] bg-slate-700 animate-pulse h-[15px]"></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-right w-[100px] font-extrabold bg-slate-700 animate-pulse h-[15px] w-[100px]"></span>
                    <span className="text-left w-[200px] bg-slate-700 animate-pulse h-[15px]"></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-right w-[100px] font-extrabold bg-slate-700 animate-pulse h-[15px] w-[100px]"></span>
                    <span className="text-left w-[200px] bg-slate-700 animate-pulse h-[15px]"></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-right w-[100px] font-extrabold bg-slate-700 animate-pulse h-[15px] w-[100px]"></span>
                    <span className="text-left w-[200px] bg-slate-700 animate-pulse h-[15px]"></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-right w-[100px] font-extrabold bg-slate-700 animate-pulse h-[15px] w-[100px]"></span>
                    <span className="text-left w-[200px] bg-slate-700 animate-pulse h-[15px]"></span>
                  </div>
                </div>
                <div className="w-full h-[72px] right-0 mr-10 top-[200px] relative">
                  <div className="top-0 relative text-center text-white text-xs font-extrabold font-['Montserrat'] place-self-center bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                  <div className="top-0 mt-10 relative text-center text-white text-xs font-medium font-['Montserrat'] place-self-center bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                  <div className="top-0 mt-5 relative text-center text-white text-xs font-medium font-['Montserrat'] place-self-center bg-slate-700 animate-pulse h-[15px] w-[100px] mx-auto"></div>
                </div>
                <div className="w-full h-[15px] left-0 top-[300px] relative text-justify text-white text-xs font-light font-['Montserrat'] bg-slate-700 animate-pulse h-[15px] w-[100%] mx-auto"></div>
              </div>
            </div>
          </div>
        </DefaultLayout>
      </div>
    );
  }

  return (
    <div>
      <DefaultLayout>
        <div className="w-full h-[100vh] md:h-[536px] absoulte">
          {/* Dekstop UI */}
          <div className="hidden md:flex">
            <Image
              className="w-full h-[613px] left-0 top-[3px] absolute object-fill"
              width={862}
              height={613}
              alt="bg"
              src={profile?.background || "https://via.placeholder.com/200x250"}
            />
            <div className="w-full h-full left-0 top-0 absolute bg-black/70"></div>
            <Image
              className="w-[222px] h-[258px] left-[54px] top-[117px] absolute"
              width={222}
              alt="bg"
              height={258}
              src={profile?.photo || "https://via.placeholder.com/200x250"}
            />
            <div className="w-[358px] h-[174px] left-[315px] top-[117px] absolute">
              <div className="left-[1px] top-0 absolute text-center text-white text-xs  font-light font-['Montserrat']">
                Full Name :{" "}
              </div>
              <div className="left-[1px] top-[40px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                Live In :{" "}
              </div>
              <div className="left-[1px] top-[80px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                Degree :{" "}
              </div>
              <div className="left-0 top-[119px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                Age :{" "}
              </div>
              <div className="left-0 top-[158px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                AVAILABLE :{" "}
              </div>
              <div className="left-[132px] top-0 absolute text-center text-white text-xs font-light font-['Montserrat']">
                {profile?.fullname || ""}
              </div>
              <div className="left-[132px] top-[40px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                {profile?.liveIn || ""}
              </div>
              <div className="left-[132px] top-[80px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                {profile?.degree || ""}
              </div>
              <div className="left-[132px] top-[119px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                {calculateAge(profile?.birthOfDay || "")}
              </div>
              <div className="left-[131px] top-[159px] absolute text-start text-white text-xs font-light font-['Montserrat']">
                {profile?.available || ""}
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <div className="w-[500px] h-[72px] left-5 ml-10 top-[396px] absolute">
                  <div className="w-[350px] xl:w-[500px] h-[15px] left-0 top-[30px] absolute text-justify text-white text-xs font-light font-['Montserrat']">
                    {profile?.overview || ""}
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="w-[300px] h-[72px] right-0 mr-10 top-[396px] absolute">
                  <div className="left-[175px] top-0 absolute text-center text-white text-xs font-medium font-['Montserrat']">
                    EDUCATION
                  </div>
                  {education.map((edu, index) => (
                    <div key={edu.id} className="mt-10">
                      <div
                        className="w-[300px] h-[15px] left-0 absolute text-start text-white text-xs font-light font-['Montserrat']"
                        style={{ top: `${30 + index * 50}px` }} // Adjust the top value dynamically
                      >
                        {edu.educationLevel} - {edu.fieldOfStudy} <br />
                        {edu.institution} -{" "}
                        {new Date(edu.startMonth).getFullYear()} -{" "}
                        {new Date(edu.finishMonth).getFullYear()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Mobile UI */}
          <div className="md:hidden">
            <Image
              className="w-full h-[100vh] left-0 top-[3px] absolute mt-[100px] object-cover"
              width={862}
              height={613}
              alt="bg"
              src={profile?.background || "https://via.placeholder.com/200x250"}
            />
            <div className="w-full h-full left-0 top-0 absolute bg-black/70 mt-[100px]"></div>
            <div className="flex flex-col">
              <Image
                className="w-[240px] h-[280px] top-[117px] relative place-self-center"
                width={222}
                alt="bg"
                height={258}
                src={profile?.photo || "https://via.placeholder.com/200x250"}
              />
              <div className="w-[358px] h-[174px] place-self-center top-[170px] relative flex flex-col justify-between text-white text-xs font-light font-['Montserrat']">
                {/* Full Name */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Full Name :
                  </span>
                  <span className="text-left w-[200px]">
                    {profile?.fullname}
                  </span>
                </div>
                {/* Live In */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Live In :
                  </span>
                  <span className="text-left w-[200px]">
                    {profile?.liveIn || ""}
                  </span>
                </div>
                {/* Degree */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Degree :
                  </span>
                  <span className="text-left w-[200px]">
                    {" "}
                    {profile?.degree || ""}
                  </span>
                </div>
                {/* Age */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Age :
                  </span>
                  <span className="text-left w-[200px]">
                    {calculateAge(profile?.birthOfDay || "")}
                  </span>
                </div>
                {/* Availability */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    AVAILABLE :
                  </span>
                  <span className="text-left w-[200px]">
                    {profile?.available || ""}
                  </span>
                </div>
              </div>
              <div className="w-full h-[72px] right-0 mr-10 top-[200px] relative">
                <div className="top-0 relative text-center text-white text-xs font-extrabold font-['Montserrat'] place-self-center">
                  EDUCATION
                </div>
                {education.map((edu, index) => (
                  <div key={edu.id} className="mt-10">
                    <div className="top-0 mt-10 relative text-center text-white text-xs font-medium font-['Montserrat'] place-self-center">
                      {edu.educationLevel} - {edu.fieldOfStudy} <br />
                      {edu.institution} -{" "}
                      {new Date(edu.startMonth).getFullYear()} -{" "}
                      {new Date(edu.finishMonth).getFullYear()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-[15px] left-0 top-[320px] relative text-center text-white text-xs font-light font-['Montserrat']">
                {profile?.overview || ""}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
