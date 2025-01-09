"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes
import DefaultLayout from "../Layout/DefaultLayout";
import { useEffect, useState } from "react";
import apiService from "@/core/response/apiResponse";
// Define PortfolioCard component
const PortfolioCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-[#313131]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.thumbnail}
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
            href={item.urlPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
          <a
            href={item.urlGithub}
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
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  const fetchPortfolio = async () => {
    try {
      setLoadingPortfolio(true);

      const response = await apiService.get("/portfolio");
      if (
        response.meta.code !== 200 ||
        !response.data.portfolio ||
        response.data.portfolio.length === 0
      ) {
        setPortfolioItems([]);
      } else {
        setPortfolioItems(response.data.portfolio);
      }
    } catch (error) {
    } finally {
      setLoadingPortfolio(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);
  if (loadingPortfolio) {
    return (
      <div>
        <DefaultLayout>
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 dark:bg-[#313131]">
            {/* Skeleton for Image Section */}
            <div className="relative h-48 overflow-hidden bg-gray-300 animate-pulse">
              <div className="w-full h-full bg-gray-400 animate-pulse" />
            </div>

            {/* Skeleton for Content Section */}
            <div className="p-6">
              <div className="w-32 h-6 bg-gray-300 animate-pulse mb-2" />{" "}
              {/* Skeleton for Title */}
              <div className="w-full h-4 bg-gray-300 animate-pulse mb-4" />{" "}
              {/* Skeleton for Description */}
              <div className="flex justify-between items-center">
                {/* Skeleton for Links */}
                <div className="w-24 h-6 bg-gray-300 animate-pulse" />{" "}
                {/* Skeleton for Live Demo Link */}
                <div className="w-24 h-6 bg-gray-300 animate-pulse" />{" "}
                {/* Skeleton for Source Link */}
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
        <div className="md:container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.length > 0 ? (
              portfolioItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))
            ) : (
              <div className="text-center place-self-center text-gray-500 dark:text-white ">
                No portfolio items found.
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
