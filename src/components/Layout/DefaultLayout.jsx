"use client";

import PropTypes from "prop-types"; // Import PropTypes

export default function DefaultLayout({ children }) {
  DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div>
      <div className="relative max-w-6xl mx-auto bg-white dark:bg-[#0A0A0A] px-6 py-10 mt-10">
        {children}
      </div>
    </div>
  );
}
