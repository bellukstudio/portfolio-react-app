"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <div>
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bottom-0">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black dark:text-white"
              href="#a"
              aria-label="Brand"
            >
              Belluk Studio
            </a>
          </div>

          <div className="mt-3">
            <p className="text-gray-500 dark:text-neutral-500">
              Copyright © {currentYear} All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
