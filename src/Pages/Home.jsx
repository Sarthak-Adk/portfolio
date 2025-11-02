import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 sm:px-8 md:px-16 lg:px-24 py-10"
    >
      {/* 🫧 Bubble Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <ul className="bubbles">
          {Array.from({ length: 30 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      {/* 💬 Text Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start space-y-4 md:space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-400">Sarthak Adhikari</span>
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer | React Enthusiast
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed px-2 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I love turning ideas into interactive, visually stunning web
          experiences using React, Tailwind, and motion design. My goal is to
          create digital products that are both functional and delightful to use.
        </motion.p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <motion.a
            href="#projects"
            className="px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-2 sm:py-3 border border-gray-500 hover:bg-white/10 rounded-full font-semibold text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* 🧑‍💻 Profile Image */}
      <motion.div
        className="relative z-10 flex-1 flex justify-center items-center mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
          <img
            src={Profile}
            alt="Sarthak Adhikari"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/40 hover:scale-105 transition-all duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
