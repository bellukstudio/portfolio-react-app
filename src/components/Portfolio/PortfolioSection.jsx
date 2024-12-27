"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes
import DefaultLayout from "../Layout/DefaultLayout";

// Define PortfolioCard component
const PortfolioCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-[#313131]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={`${item.title} thumbnail`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1531297484001-80022131f5a1";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 dark:text-white">{item.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={item.demoLink}  
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
          <a
            href={item.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors dark:text-white"
          >
            <FaGithub />
            <span>Source</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for PortfolioCard
PortfolioCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform built with React and Node.js.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for managing daily tasks and projects.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather monitoring dashboard with detailed forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics dashboard for tracking social media performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts and nutrition.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "AI-powered recipe recommendation engine.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
      demoLink: "https://demo.example.com",
      sourceLink: "https://github.com/example",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <div className="md:container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
