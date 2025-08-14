import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaReact, FaBrain, FaPython, FaCog, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaServer, FaCloud } from "react-icons/fa";

export default function Skills() {
  const skills = [
    // Core Programming Languages
    { name: "Python", proficiency: 90, color: "from-blue-600 to-gray-800" },
    { name: "JavaScript", proficiency: 88, color: "from-blue-600 to-gray-800" },
    { name: "C/C++", proficiency: 85, color: "from-blue-600 to-gray-800" },
    { name: "HTML/CSS", proficiency: 90, color: "from-blue-600 to-gray-800" },
    
    // Key Technologies
    { name: "Flask", proficiency: 85, color: "from-blue-600 to-gray-800" },
    { name: "SQLite", proficiency: 82, color: "from-blue-600 to-gray-800" },
    { name: "Git", proficiency: 88, color: "from-blue-600 to-gray-800" },
    { name: "Postman", proficiency: 85, color: "from-blue-600 to-gray-800" },
    
    // Data Science & ML
    { name: "Pandas", proficiency: 85, color: "from-blue-600 to-gray-800" },
    { name: "NumPy", proficiency: 82, color: "from-blue-600 to-gray-800" },
    { name: "Machine Learning", proficiency: 80, color: "from-blue-600 to-gray-800" },
    { name: "Data Structures & Algorithms", proficiency: 85, color: "from-blue-600 to-gray-800" }
  ];

  const categories = [
    {
      title: "Core Programming",
      skills: skills.slice(0, 4)
    },
    {
      title: "Key Technologies",
      skills: skills.slice(4, 8)
    },
    {
      title: "Data Science & ML",
      skills: skills.slice(8, 12)
    }
  ];

  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('python')) return <FaPython />;
    if (name.includes('javascript')) return <FaJs />;
    if (name.includes('html')) return <FaHtml5 />;
    if (name.includes('css')) return <FaCss3Alt />;
    if (name.includes('git')) return <FaGitAlt />;
    if (name.includes('sql') || name.includes('mysql') || name.includes('sqlite') || name.includes('redis') || name.includes('dbms')) return <FaDatabase />;
    if (name.includes('flask') || name.includes('vue') || name.includes('bootstrap')) return <FaCode />;
    if (name.includes('pandas') || name.includes('numpy') || name.includes('scikit')) return <FaBrain />;
    if (name.includes('machine learning')) return <FaBrain />;
    if (name.includes('data structures') || name.includes('algorithms')) return <FaCode />;
    if (name.includes('linux') || name.includes('postman') || name.includes('excel') || name.includes('canva')) return <FaTools />;
    if (name.includes('celery')) return <FaServer />;
    if (name.includes('c++') || name.includes('c/')) return <FaCode />;
    return <FaCode />;
  };

  const getCategoryIcon = (categoryTitle) => {
    const title = categoryTitle.toLowerCase();
    if (title.includes('languages')) return <FaCode />;
    if (title.includes('databases')) return <FaDatabase />;
    if (title.includes('tools')) return <FaTools />;
    if (title.includes('frameworks')) return <FaReact />;
    if (title.includes('core cs')) return <FaBrain />;
    return <FaCode />;
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            <span className="text-gray-300 font-medium">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Technical{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various technologies and tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-gray-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-blue-400/25 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                    <div className="text-white text-xl">
                      {getCategoryIcon(category.title)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <div className="text-white dark:text-black text-lg">
                              {getSkillIcon(skill.name)}
                            </div>
                          </div>
                          <span className="text-gray-200 font-semibold text-lg">{skill.name}</span>
                        </div>
                        <span className="text-blue-300 font-bold text-lg">{skill.proficiency}%</span>
                      </div>
                      <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.5, delay: skillIndex * 0.2 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills section removed as per user request */}
      </div>
    </section>
  );
}
