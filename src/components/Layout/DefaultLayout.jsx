"use client";

import PropTypes from "prop-types"; // Import PropTypes

export default function DefaultLayout({ children }) {
  DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div>
      <div className="relative max-w-6xl mx-auto bg-white dark:bg-gray-900 px-4 py-4 md:px-6 md:py-10 mt-10">
        {children}
      </div>
    </div>
  );
}
