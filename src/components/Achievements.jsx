import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar, FaAward, FaCrown } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "Management Lead – Google Developer Groups on Campus",
      icon: <FaTrophy />,
      description: "Leading technical community initiatives and organizing developer events"
    },
    {
      title: "NCC Cadet – Completed rigorous training",
      icon: <FaMedal />,
      description: "Successfully completed National Cadet Corps training program"
    },
    {
      title: "Google Cloud Contributor & Arcade Contributor",
      icon: <FaStar />,
      description: "Active contributor to Google Cloud and Arcade platforms"
    },
    {
      title: "Academic Excellence & multiple awards",
      icon: <FaCrown />,
      description: "Consistent academic performance and recognition"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
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
            <span className="text-white font-medium">Recognition</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Notable{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Milestones and accomplishments that highlight my dedication and commitment to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-gray-400/10 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="text-white text-2xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
