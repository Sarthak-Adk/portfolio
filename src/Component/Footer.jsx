import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-24 border-t border-muted bg-gray-100/25 dark:bg-gray-900 dark:text-white backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">S.Adk</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Building innovative digital solutions with a focus on clean, efficient code and exceptional user experiences.
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="text-center md:text-right">
            <p className="font-medium text-black dark:text-white mb-3">Connect with me</p>
            <div className="flex justify-center md:justify-end space-x-4 text-purple-500 text-xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
              </a>
              <a href="mailto:youremail@example.com">
                <FaEnvelope className="text-pink-500 hover:text-purple-600 hover:scale-110 transition cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} Sarthak Adk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
