import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const ProjectCard = ({ title, description, image, tags, code, category, icon: Icon }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const getCategoryName = (category) => {
    if (category === "iot") return "IoT";
    if (category === "ai") return "AI & ML";
    return category;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.3)",
      }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white/70 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col text-black dark:text-white shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-xs font-medium z-10">
          <Icon className="w-5 h-5" />
          <span className="ml-1.5 capitalize">{getCategoryName(category)}</span>
        </div>

        {/* Advanced shimmer placeholder */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-6 flex-grow">
        <motion.h3
          className="text-xl font-semibold mb-2"
          whileHover={{ color: "#9b87f5" }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="text-xs py-1 px-3 bg-secondary rounded-full"
              whileHover={{
                backgroundColor: "rgba(155, 135, 245, 0.2)",
                color: "#9b87f5",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-muted-foreground hover:text-brand-purple transition-colors"
            whileHover={{ scale: 1.05, color: "#9b87f5" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-1.5 h-4 w-4" />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
