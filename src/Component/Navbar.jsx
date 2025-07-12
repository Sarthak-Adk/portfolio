import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext.jsx';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center text-lg mb-10">
      <div className="font-bold text-xl text-purple-500">S.Adk</div>
      <ul className="flex items-center gap-8">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-500' : 'hover:text-purple-500'}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-purple-500' : 'hover:text-purple-500'}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-purple-500' : 'hover:text-purple-500'}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-purple-500' : 'hover:text-purple-500'}>
          Contact Me
        </NavLink>
        <button onClick={toggleTheme} className="text-xl text-purple-500 hover:scale-110 transition">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
