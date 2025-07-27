import React from "react";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="px-4 md:px-[140px] py-16 pt-[134px] flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* Left Side */}
      <div className="max-w-xl mr-12 **mb-10 md:mb-0 md:mr-20**"> {/* Added margin-bottom for small screens and margin-right for medium screens */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          I'm Sarthak Adhikari
        </h1>

        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
          A Frontend Developer |
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Passionate about programming and software development with expertise
          in JavaScript, C and C++. Building modern web applications using
          Node.js, React.js, and Next.js. Freelancer specializing in
          AI-powered solutions.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
         <Link to="/contact"><button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300">
            Hire Me
          </button></Link>
          <Link to="/projects"><button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300">
            View Project
          </button></Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <FaTwitter className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
          <FaFacebook className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
          <FaGithub className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
          <FaLinkedin className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 ml-12 md:mt-0 relative">
        <div className="rounded-full border-[6px] border-purple-600 p-1 shadow-xl shadow-purple-700 hover:shadow-pink-500 transition duration-500">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-[280px] md:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;