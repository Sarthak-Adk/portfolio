import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../Pages/Home';

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
    { name: "Firebase", proficiency: 70 },
    { name: "Next.js", proficiency: 65 },
  ];

  return (
    <div>
      <Home />

      {/* About Section */}
      <section className="pt-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-gradient-to-r from-pink-500 to-purple-600 mb-4"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-purple-600 mb-6"
          >
            Who I Am
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-muted-foreground mb-12"
          >
            I'm a Computer Science student specializing in AI & ML. Passionate about programming, AI integration, and building innovative web applications.
          </motion.p>

          <div className="dark:text-black grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {[
              {
                title: "Computer Science",
                desc: "Strong foundation in algorithms, data structures, and programming principles."
              },
              {
                title: "Web Development",
                desc: "Experienced in building responsive web applications using React.js, Next.js, and Node.js."
              },
              {
                title: "AI & Machine Learning",
                desc: "Specializing in artificial intelligence and machine learning algorithms."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              More About Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="pt-24 pb-32 bg-secondary/50" id="skills">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4"
          >
            Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-muted-foreground mb-10"
          >
            A collection of technologies I work with to build web applications and solve complex problems.
          </motion.p>

          <div className=" grid grid-cols-1  md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flexjustify-between items-center mb-2">
                  <h3 className="text-lg font-medium">{tech.name}</h3>
                  <span className="text-sm text-muted-foreground">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="  bg-secondary/50" id="projects">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4"
          >
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-muted-foreground mb-10"
          >
            A selection of my recent web development and programming projects.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:text-black ">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow"
              >
                <div className="h-48  overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 text-left ">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs py-1 px-3 bg-secondary rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Link to={project.link} className="text-teal-400 hover:text-teal-300">
                      View Details
                    </Link>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" id="contact">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4"
          >
            Contact
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            I'm currently available for freelance work and open to new opportunities.
            If you have a project in mind or want to collaborate, let's connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
