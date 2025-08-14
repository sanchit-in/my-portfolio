import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp, FaRocket, FaCode, FaBrain } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-gray-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <span className="text-white font-bold text-lg">SG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                    Sanchit Gupta
                  </h3>
                  <p className="text-gray-400 text-sm">Software Engineer & AI Developer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aspiring Software Engineer & AI Developer passionate about creating 
                intelligent solutions and building impactful applications that make a difference.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/sanchit-in", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://linkedin.com/in/sanchit-gupta-a50a9625b", label: "LinkedIn" },
                  { icon: FaEnvelope, href: "mailto:sanchitgupta1.ai@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="relative z-10 text-xl text-gray-300 group-hover/social:text-blue-300 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-gray-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <FaCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  { name: "About", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="group/link flex items-center text-gray-300 hover:text-blue-300 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-gray-600 rounded-full mr-3 group-hover/link:scale-150 transition-transform duration-300"></div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-gray-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg mr-4">
                  <FaBrain className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Contact Info
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "📍", text: "Gwalior, India" },
                  { icon: "📧", text: "sanchitgupta1.ai@gmail.com" },
                  { icon: "📱", text: "+91 91407 10681" }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="text-xl">{info.icon}</span>
                    <span className="font-medium">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 via-gray-400/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm mb-4 md:mb-0"
              >
                © 2024 Sanchit Gupta. All rights reserved.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-400 text-sm"
              >
                {/* Removed "Made with using React & Tailwind" text */}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-gray-800 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-400/25 transition-all duration-300">
            <FaArrowUp className="text-white text-lg" />
          </div>
        </motion.button>
      </div>
    </footer>
  );
}
