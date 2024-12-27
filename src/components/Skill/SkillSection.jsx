"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Slider from "react-slick";
import "../../app/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "CSS", level: "Expert" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Python", level: "Beginner" },
];

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
                        <h3 className="text-xl font-semibold dark:text-black">{skill.name}</h3>
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
