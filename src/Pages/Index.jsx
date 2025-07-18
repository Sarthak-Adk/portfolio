// Updated Index.jsx with consistent color scheme and enhancements
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../Pages/Home';
import { Star, ArrowRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      title: "Income Tax Fraud Detection",
      description: "A system to detect fraudulent activities in income tax filings using AI and machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Machine Learning", "AI"],
      link: "/projects",
      code: "https://github.com/oxBinaryBrain/An_Income_Tax_Fraud_Detection_Using_AI-ML"
    },
    {
      title: "Oral Cancer Classification using Neural Networks",
      description: "Machine learning model to detect and classify oral cancer levels from images.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "TensorFlow", "Neural Networks"],
      link: "/projects",
      code: "https://github.com/oxBinaryBrain/Oral_Cancer_Classification"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning model to analyze whether a credit card transaction is fraudulent or not.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "ML", "Data Science"],
      link: "/projects",
      code: "https://github.com/oxBinaryBrain/CC-Fraud-Detection"
    },
  ];

  const techStack = [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "React.js", proficiency: 80 },
    { name: "Node.js", proficiency: 75 },
    { name: "PHP", proficiency: 70 },
    { name: "Next.js", proficiency: 65 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-[140px] py-10 transition-colors duration-500">
      <Home />

      {/* About Section */}
      <section className="pt-24">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500  mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-6"
          >
            Who I Am
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
          >
            I'm a Computer Science student specializing in Web Development & Desktop Applications. Passionate about programming, AI integration, and building innovative web applications.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Computer Science",
              desc: "Strong foundation in algorithms, data structures, and programming principles."
            }, {
              title: "Web Development",
              desc: "Experienced in building responsive web applications using React.js, Next.js, and Node.js."
            }, {
              title: "AI & Machine Learning",
              desc: "Specializing in artificial intelligence and machine learning algorithms."
            }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              More About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pt-12 pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500 mb-4"
          >
            Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl  text-purple-600 dark:text-purple-400 font-bold mb-6"
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
  <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-lg max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-pink-500/10 rounded-full mb-6 mx-auto">
            <Star className="w-8 h-8 text-pink-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. If you have a project in mind or want to collaborate, let's connect!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 pt-1 w-5" />
          </Link>
        </motion.div>
      </div>
      </section>
      {/* Remaining Sections follow similar color styling... */}
    </div>
  );
};

export default Index;
