import React from "react";
import profile from "../assets/profile.jpg";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin, } from "react-icons/fa";
const Home = () => {
  return (
    <div className="px-12 py-10 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white text-black">
          I'm Sarthak Adhikari
        </h1>
        <h2 className="text-2xl text-purple-600 font-bold mb-4">
          A Frontend Developer |
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
         Passionate about programming and software development with expertise in JavaScript, C and C++.
              Building modern web applications using Node.js, React.js, and Next.js. Freelancer specializing in AI-powered solutions.
          </p>

        <div className="flex gap-4 mb-6">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full hover:scale-105 duration-300">
            Hire me
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full hover:scale-105 duration-300">
            Let's Talk
          </button>
        </div>

        <div className="flex gap-4 text-xl">
          <FaTwitter className="text-pink-500 hover:scale-110 duration-300 cursor-pointer" />
          <FaFacebook className="text-pink-500 hover:scale-110 duration-300 cursor-pointer" />
          <FaGithub className="text-pink-500 hover:scale-110 duration-300 cursor-pointer" />
          <FaLinkedin className="text-pink-500 hover:scale-110 duration-300 cursor-pointer" />
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-10 md:mt-0 relative">
        <div className="rounded-full border-[6px] border-purple-600 p-1 shadow-xl shadow-purple-700">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-[300px] md:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
