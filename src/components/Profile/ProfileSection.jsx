"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <div>
      <DefaultLayout>
        <div className="w-full h-[100vh] md:h-[536px] absoulte">
          {/* Dekstop UI */}
          <div className="hidden md:flex">
            <Image
              className="w-full h-[613px] left-0 top-[3px] absolute"
              width={862}
              height={613}
              alt="bg"
              src={"https://via.placeholder.com/862x533"}
            />
            <div className="w-full h-full left-0 top-0 absolute bg-black/70"></div>
            <Image
              className="w-[222px] h-[258px] left-[54px] top-[117px] absolute"
              width={222}
              alt="bg"
              height={258}
              src={"https://via.placeholder.com/222x258"}
            />
            <div className="w-[358px] h-[174px] left-[315px] top-[117px] absolute">
              <div className="left-[1px] top-0 absolute text-center text-white text-xs font-light font-['Montserrat']">
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
                MUH. LUKMAN AKBAR PRIHANDOYO
              </div>
              <div className="left-[132px] top-[40px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                SLAWI, TEGAL REGENCY
              </div>
              <div className="left-[132px] top-[80px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                S1
              </div>
              <div className="left-[132px] top-[119px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                23
              </div>
              <div className="left-[131px] top-[159px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                FREELANCE, CONTRACT, FULL TIME
              </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <div className="w-[500px] h-[72px] left-0 ml-10 top-[396px] absolute">
                  <div className="w-[350px] xl:w-[500px] h-[15px] left-0 top-[30px] absolute text-justify text-white text-xs font-light font-['Montserrat']">
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="w-[300px] h-[72px] right-0 mr-10 top-[396px] absolute">
                  <div className="w-[300px] h-[15px] left-0 top-[30px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                    SMK NEGERI 1 SLAWI - 2016 - 2019
                  </div>
                  <div className="w-[300px] h-[15px] left-0 top-[57px] absolute text-center text-white text-xs font-light font-['Montserrat']">
                    SMK NEGERI 1 SLAWI - 2016 - 2019
                  </div>
                  <div className="left-[175px] top-0 absolute text-center text-white text-xs font-medium font-['Montserrat']">
                    EDUCATION
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile UI */}
          <div className="md:hidden">
            <Image
              className="w-full h-[100vh] left-0 top-[3px] absolute mt-[100px]"
              width={862}
              height={613}
              alt="bg"
              src={"https://via.placeholder.com/862x533"}
            />
            <div className="w-full h-full left-0 top-0 absolute bg-black/70 mt-[100px]"></div>
            <div className="flex flex-col">
              <Image
                className="w-[240px] h-[280px] top-[117px] relative place-self-center"
                width={222}
                alt="bg"
                height={258}
                src={"https://via.placeholder.com/222x258"}
              />
              <div className="w-[358px] h-[174px] place-self-center top-[170px] relative flex flex-col justify-between text-white text-xs font-light font-['Montserrat']">
                {/* Full Name */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Full Name :
                  </span>
                  <span className="text-left w-[200px]">
                    MUH. LUKMAN AKBAR PRIHANDOYO
                  </span>
                </div>
                {/* Live In */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Live In :
                  </span>
                  <span className="text-left w-[200px]">
                    SLAWI, TEGAL REGENCY
                  </span>
                </div>
                {/* Degree */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Degree :
                  </span>
                  <span className="text-left w-[200px]">S1</span>
                </div>
                {/* Age */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    Age :
                  </span>
                  <span className="text-left w-[200px]">23</span>
                </div>
                {/* Availability */}
                <div className="flex justify-between">
                  <span className="text-right w-[100px] font-extrabold">
                    AVAILABLE :
                  </span>
                  <span className="text-left w-[200px]">
                    FREELANCE, CONTRACT, FULL TIME
                  </span>
                </div>
              </div>
              <div className="w-full h-[72px] right-0 mr-10 top-[200px] relative">
                <div className="top-0 relative text-center text-white text-xs font-extrabold font-['Montserrat'] place-self-center">
                  EDUCATION
                </div>
                <div className="top-0 mt-10 relative text-center text-white text-xs font-medium font-['Montserrat'] place-self-center">
                  SMK NEGERI 1 SLAWI - 2016 - 2019
                </div>
                <div className="top-0 mt-5 relative text-center text-white text-xs font-medium font-['Montserrat'] place-self-center">
                  SMK NEGERI 1 SLAWI - 2016 - 2019
                </div>
              </div>
              <div className="w-full h-[15px] left-0 top-[300px] relative text-justify text-white text-xs font-light font-['Montserrat']">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
