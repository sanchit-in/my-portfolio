import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "B.Tech – ITM Gwalior",
      details: "Artificial Intelligence & Machine Learning (2022–2026)",
      grade: "CGPA: 7.83/10",
      icon: <FaGraduationCap />
    },
    {
      degree: "Diplomas – IIT Madras",
      details: "Programming & Data Science (2022–2025)",
      grade: "CGPA: 7.15 (Programming), 8.08 (Data Science)",
      icon: <FaUniversity />
    },
    {
      degree: "St. Mary Orthodox School",
      details: "Intermediate | Matriculation",
      icon: <FaSchool />
    },
  ];

  return (
    <section id="education" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
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
            <span className="text-white font-medium">Academic Journey</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Educational{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic journey focused on technology, AI/ML, and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-gray-400/10 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="text-white text-2xl">
                      {edu.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-3 leading-relaxed">
                    {edu.details}
                  </p>
                  {edu.grade && (
                    <p className="text-blue-300 font-semibold text-sm">
                      {edu.grade}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
