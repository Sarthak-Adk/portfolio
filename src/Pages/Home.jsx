import React from "react";
import { motion } from "framer-motion";
import p2 from "../assets/p2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100vh] flex flex-col md:flex-row justify-center items-center text-center md:text-left overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 md:px-20"
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
      <div className="relative z-10 flex-1 px-10 flex flex-col justify-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-400">Sarthak Adhikari</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer | React Enthusiast
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-xl leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I love turning ideas into interactive, visually stunning web
          experiences using React, Tailwind, and motion design. My goal is to
          create digital products that are both functional and delightful to use.
        </motion.p>

        <div className="flex justify-center md:justify-start gap-4">
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:bg-white/10 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* 🧑‍💻 Profile Image */}
      <motion.div
        className="z-10 flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72">
          <img
            src={p2}
            alt="Sarthak Adhikari"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/40 hover:scale-105 transition-all duration-500"
          />
          {/* <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent animate-pulse"></div> */}
        </div>
      </motion.div>
    </section>
  );
}