import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleProjectClick = () => {
    const section = document.getElementById("project");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-black text-white top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-20">
      <img className="w-20" src={logo} alt="" />

        <ul className="hidden lg:flex gap-8 text-xl">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={handleAboutClick}
              className="hover:text-gray-400 focus:outline-none"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={handleProjectClick}
              className="hover:text-gray-400 focus:outline-none"
            >
              Project
            </button>
          </li>
          <li>
            <button
              onClick={handleContactClick}
              className="hover:text-gray-400 focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all">
          <button
            className="absolute top-6 right-6 text-4xl text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ❌
          </button>
          <ul className="flex flex-col gap-10 text-3xl">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleAboutClick}
                className="focus:outline-none text-white"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={handleProjectClick}
                className="focus:outline-none text-white"
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={handleContactClick}
                className="focus:outline-none text-white"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
