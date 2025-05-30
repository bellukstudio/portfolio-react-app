"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      "home",
      "profile",
      "experience",
      "skills",
      "portfolio",
      "contact",
    ];

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Deteksi jika elemen berada di bagian atas atau tengah layar
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection || "home");
    };

    const handleLocationChange = () => {
      const path = window.location.hash.replace("#", "");
      if (path === "") {
        setActiveSection("home");
      } else {
        setActiveSection(path);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleLocationChange);

    // Pastikan status awal sesuai dengan URL hash
    handleLocationChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return (
    <header className="sticky top-10 inset-x-0 z-50 w-full text-sm">
      <nav className="hidden md:flex mt-4 relative max-w-6xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 px-6 md:items-center md:justify-between md:py-0 md:px-8 md:mx-auto dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <a
              className="rounded-md text-xl inline-block font-extrabold focus:outline-none focus:opacity-80 whitespace-nowrap"
              href="/"
            >
              Belluk Studio
            </a>
          </div>
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden md:block hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
          aria-labelledby="hs-navbar-header-floating-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            {[
              { id: "home", label: "Home" },
              { id: "profile", label: "Profile" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skill" },
              { id: "portfolio", label: "Portfolio" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) =>
              id === "contact" ? (
                <a
                  key={id}
                  href={`#${id}`}
                  className="py-2 px-4 rounded-full border-s-2 md:border-s-0 md:border-b-2 border-transparent font-medium text-neutral-200 focus:outline-none  dark:text-neutral-200 bg-black "
                  aria-current="page"
                >
                  Contacts
                </a>
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`py-0.5 md:py-3 px-4 md:px-1 font-medium text-gray-800 focus:outline-none dark:text-neutral-200 ${
                    activeSection === id
                      ? "border-b-2 border-gray-800 dark:border-neutral-200"
                      : "border-b-2 border-transparent"
                  }`}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
