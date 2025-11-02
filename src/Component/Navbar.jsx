import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-24 py-4 shadow-sm bg-white dark:text-white dark:bg-gray-900 fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-500">S.Adk</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-base font-medium">
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="text-xl text-blue-500 hover:scale-110 transition duration-200"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>

      {/* Mobile Icons */}
      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-xl text-blue-500"
          aria-label="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          onClick={toggleMenu}
          className="text-2xl text-blue-500"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center gap-6 py-6 text-lg font-medium md:hidden animate-slideDown">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "hover:text-blue-600"
            }
          >
            Contact Me
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
