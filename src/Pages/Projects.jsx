import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Component/ProjectCard";
import LearningApp from "../assets/learning-app.png";
import CodeArena from "../assets/codearena.png";
import SalonManagementSystem from "../assets/salon-management-system.jpg";
import WeatherApp from "../assets/weather-app.png";
import BMI_Calculator from "../assets/bmi-calculator.png";
import ATM from "../assets/atm.png";

import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
  {
    id: 1,
    title: "ATM System",
    description: "A simple ATM system built using C that allows users to check balance, withdraw, and deposit cash.",
    image: ATM ,
    tags: ["C", "ATM", "Console App"],
    code: "https://github.com/Sarthak-Adk/ATM-using-C", 
    category: "other"
  },
  {
    id: 2,
    title: "Learning App",
    description: "An educational platform built using React and Tailwind CSS to help beginners learn to code interactively.",
    image: LearningApp,
    tags: ["React", "Tailwind CSS", "Learning"],
    code: "https://github.com/Sarthak-Adk/Learning-App", 
    category: "web"
  },
  {
    id: 3,
    title: "CodeArena",
    description: "A MERN stack project for hosting and joining hackathons, featuring user authentication, submissions, and leaderboard.",
    image: CodeArena,
    tags: ["MERN", "Hackathon", "Web App"],
    code: "https://github.com/Prajon-Adhikari/Project", 
    category: "web"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather application built using React and Tailwind CSS that fetches real-time weather data via API.",
    image: WeatherApp,
    tags: ["Html","JavaScript", "Tailwind CSS", "API"],
    code: "https://github.com/Sarthak-Adk/Weather-App-using-tailwindcss", 
    category: "web"
  },
  {
    id: 5,
    title: "BMI Calculator",
    description: "A BMI calculator built using React that calculates and categorizes body mass index based on height and weight.",
    image: BMI_Calculator,
    tags: ["React", "Health", "Calculator"],
    code: "https://github.com/Sarthak-Adk/BMI-Calculator", 
    category: "web"
  },
  {
    id: 6,
    title: "Salon Management System",
    description: "A desktop application built in Visual Basic for managing salon bookings, staff, and customer records.",
    image: SalonManagementSystem,
    tags: ["Visual Basic", "Desktop App", "Management"],
    code: "https://github.com/ritikjoshi22/Salon-Management-System", 
    category: "other"
  }
];

const getIcon = (category) => {
  switch (category) {
    case "ai":
      return Bot;
    case "web":
      return MonitorSmartphone;
    case "blockchain":
      return Database;
    case "iot":
      return Cpu;
    case "ml":
      return Brain;
    case "data":
      return BarChart;
    default:
      return Code;
  }
};


  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "blockchain", name: "Blockchain" },
    { id: "iot", name: "IoT" }
  ];

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 text-black dark:text-white px-6 md:px-[140px] py-10 transition-colors duration-500">
      <section className="mt-15">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500 mb-4">
              Project
            </span>
         
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 ">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col shadow-2xl  md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg dark:bg-gray-800 dark:text-white">
              {/* Category Filter */}
              <div className="flex items-center"> 
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 font-medium text-md">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-md font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-brand-purple text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64 ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black dark:text-white">
                  <Search className="w-4 h-4 text-muted-foreground " />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple text-black dark:text-white placeholder:text-muted-foreground outline-1"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Projects;