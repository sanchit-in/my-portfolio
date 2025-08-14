import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaRocket, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaCode className="text-2xl" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies",
      color: "from-blue-500 to-gray-600"
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions and predictive models",
      color: "from-gray-500 to-blue-500"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Problem Solving",
      description: "Creating innovative solutions for complex challenges",
      color: "from-white to-gray-400"
    }
  ];

  const stats = [
    { number: "4+", label: "Projects Completed", icon: <FaCode /> },
    { number: "3", label: "Internships", icon: <FaUsers /> },
    { number: "10+", label: "Technologies", icon: <FaLightbulb /> },
    { number: "87%", label: "AI Model Accuracy", icon: <FaChartLine /> }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
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
            <span className="text-white font-medium">About Me</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Crafting Digital{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into elegant, scalable solutions that make a difference in the digital world
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-gray-400/20 to-white/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Who I Am
                </h3>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  I&apos;m an aspiring Software Engineer with a passion for creating intelligent, 
                  scalable, and impactful software solutions. With project-based and internship 
                  experience in machine learning and full-stack development, I&apos;m constantly 
                  learning and pushing the boundaries of what&apos;s possible with technology.
                </p>
                <p className="text-gray-300">
                  My journey in tech started with curiosity and has evolved into a deep 
                  commitment to building solutions that make a difference. I believe in 
                  writing clean, maintainable code and creating user experiences that 
                  delight and inspire.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative text-center"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-gray-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-white text-xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
