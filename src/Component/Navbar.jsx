import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="w-full  flex items-center justify-between px-24 py-4 shadow-sm bg-white dark:text-white dark:bg-gray-900 fixed top-0 left-0 z-50">
      <div className="text-2xl font-bold text-purple-600">S.Adk</div>

      <ul className="flex items-center gap-6 text-base font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
            }
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="text-xl text-purple-500 hover:scale-110 transition duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;