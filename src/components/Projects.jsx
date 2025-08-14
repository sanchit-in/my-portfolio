import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain, FaChartLine } from "react-icons/fa";

export default function Projects() {
  const projects = [
                    {
                  title: "Quiz Master App (IQManthan)",
                  tech: "Vue 3, Flask, SQLite, Redis, Celery, Bootstrap",
                  desc: "Real-time quiz app with role-based modules and automated reports. Features live scoring, user management, and comprehensive analytics dashboard.",
                  category: "Full-Stack",
                  icon: <FaCode />,
                  github: "https://github.com/sanchit-in/quiz-master",
                  live: "https://quiz-master-25ix.onrender.com",
                  image: "/images/quiz master.png"
                },
                {
                  title: "System Threat Forecasting",
                  tech: "Python, Scikit-learn, Pandas, NumPy",
                  desc: "Built ML model detecting infections with 62% accuracy, achieved top 20% in Kaggle competition. Implements advanced feature engineering and ensemble methods.",
                  category: "AI/ML",
                  icon: <FaBrain />,
                  github: "https://github.com/sanchit-in/System-Threat-Forecaster-Kaggel-Competition.git",
                  live: null,
                  image: "/images/system.png"
                },
                {
                  title: "Sales & Stock Optimization",
                  tech: "Excel, Python, SQL, Data Analysis",
                  desc: "Optimized stock management system improving turnover by 18% and reducing wastage by 25%. Implemented predictive analytics for inventory forecasting and demand planning. Developed comprehensive reporting dashboards and automated alerts for stock levels.",
                  category: "Data Analytics",
                  icon: <FaChartLine />,
                  github: null,
                  live: null,
                  image: "/images/stock.png"
                },
                {
                  title: "E-Library Management System",
                  tech: "Python, Flask, SQL, HTML/CSS",
                  desc: "Developed comprehensive online library system with responsive UI, user authentication, book management, and advanced search functionality.",
                  category: "Full-Stack",
                  icon: <FaDatabase />,
                  github: "https://github.com/sanchit-in/akshardham-e-library-management.git",
                  live: "https://akshardham-library.onrender.com",
                  image: "/images/e-lib.png"
                },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full-Stack": return "bg-gray-700 text-gray-300 border-gray-600";
      case "AI/ML": return "bg-gray-700 text-gray-300 border-gray-600";
      case "Data Analytics": return "bg-gray-700 text-gray-300 border-gray-600";
      default: return "bg-gray-700 text-gray-300 border-gray-600";
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full"></div>
            <span className="text-white font-medium">Portfolio</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Featured{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI/ML, and data analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-gray-400/10 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                {/* Project Image */}
                <div className="relative h-48 bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                      {project.icon}
                      <span className="ml-1">{project.category}</span>
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                    <p className="text-sm text-gray-300 font-medium">
                      {project.tech}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                      >
                        <FaGithub className="mr-2" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-blue-600 text-white rounded-lg hover:from-gray-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sanchit-in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-white hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
