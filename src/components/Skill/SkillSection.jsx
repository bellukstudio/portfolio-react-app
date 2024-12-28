"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Slider from "react-slick";
import "../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import apiService from "@/core/response/apiResponse";

const SkillSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [loadingSkill, setLoadingSkill] = useState(true);
  const [skills, setSkills] = useState([]);

  const fetchSkillData = async () => {
    try {
      setLoadingSkill(true);
      const response = await apiService.get("/skill");
  
      // Check if the response code is 200 and if 'skill' data exists
      if (response.meta.code !== 200 || !response.data.skill || response.data.skill.length === 0) {
        setSkills([]);
      } else {
        setSkills(response.data.skill);
      }
    } catch (error) {
      console.error("Error fetching skill data:", error);
    } finally {
      setLoadingSkill(false);
    }
  };
  

  useEffect(() => {
    fetchSkillData();
  }, []);

  if (loadingSkill) {
    return (
      <div>
        <DefaultLayout>
          <div className="md:container mx-auto py-10 relative">
            <h2 className="text-5xl font-bold text-center mb-10">My Skills</h2>

            {/* Skeleton for Background Section */}
            <div className="relative w-full h-[300px]">
              <div className="w-full h-full bg-gray-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Skeleton for Skills Slider Section */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-11/12 md:w-3/4 p-6 rounded-lg shadow-lg">
                  <Slider {...settings}>
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <div key={index} className="p-4">
                          <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            {/* Skeleton for Skill Name */}
                            <div className="w-32 h-6 bg-gray-300 animate-pulse mx-auto mb-2"></div>
                            {/* Skeleton for Skill Level */}
                            <div className="w-24 h-4 bg-gray-300 animate-pulse mx-auto"></div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
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
        <div className="md:container mx-auto py-10 relative">
          <h2 className="text-5xl font-bold text-center mb-10">My Skills</h2>

          {/* Background Section */}
          <div className="relative w-full h-[300px]">
            <Image
              className="w-full h-full object-cover"
              width={862}
              height={300}
              alt="Background for My Skills section"
              src="/background_skill.webp"
            />
            <div
              className="absolute inset-0 bg-black/70"
              aria-hidden="true"
            ></div>

            {/* Skills Slider Section */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-11/12 md:w-3/4 p-6 rounded-lg shadow-lg">
                <Slider {...settings}>
                  {skills.map((skill, index) => (
                    <div key={index} className="p-4">
                      <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-xl font-semibold dark:text-black">
                          {skill.skillName}
                        </h3>
                        <p className="text-gray-500">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SkillSection;
