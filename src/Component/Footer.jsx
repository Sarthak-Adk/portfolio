import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 md:px-24 border-t border-gray-200 bg-gray-100/25 dark:bg-gray-900 dark:text-white backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          {/* Left: Branding */}
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">S.Adk</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="w-full md:w-auto">
            <p className="font-medium text-gray-800 dark:text-white mb-3">
              Connect with me
            </p>
            <div className="flex justify-center md:justify-end flex-wrap gap-5 text-2xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-purple-600 hover:scale-110 transition-transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-purple-600 hover:scale-110 transition-transform"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-purple-600 hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="text-pink-500 hover:text-purple-600 hover:scale-110 transition-transform"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          © {new Date().getFullYear()} <span className="font-semibold text-purple-600">Sarthak Adk</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
