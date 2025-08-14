import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown, FaRocket, FaCode, FaBrain, FaCheck } from "react-icons/fa";

export default function Hero() {
  const containerRef = useRef(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("sanchitgupta1.ai@gmail.com");
      setEmailCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "sanchitgupta1.ai@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setEmailCopied(false);
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full"
              />
              <span className="text-white text-sm font-medium">Welcome to my portfolio</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">
                    Hi, I&apos;m{" "}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
                    Sanchit
                  </span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-300 font-light">
                  Software Engineer & AI Developer
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
            >
              Passionate about creating intelligent, scalable solutions that make a difference. 
              Specializing in full-stack development and machine learning.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/Sanchit_gupta_resume.pdf"
                download
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-gray-600 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get In Touch</span>
                <FaArrowDown className="ml-2 group-hover:translate-y-0.5 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: "https://github.com/sanchit-in", label: "GitHub", isLink: true },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sanchit-gupta-a50a9625b", label: "LinkedIn", isLink: true },
                { icon: emailCopied ? FaCheck : FaEnvelope, href: "#", label: "Email", isLink: false }
              ].map((social, index) => (
                social.isLink ? (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300"
                  >
                    <social.icon className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.a>
                ) : (
                  <motion.button
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleEmailClick}
                    className="group p-3 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 cursor-pointer relative"
                    title="Click to copy email address"
                  >
                    <social.icon className={`text-xl transition-all duration-300 ${
                      emailCopied 
                        ? "text-green-400 scale-110" 
                        : "text-white group-hover:text-blue-300"
                    }`} />
                    
                    {/* Toast Notification */}
                    {showToast && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap z-50"
                      >
                        Email copied! ✓
                      </motion.div>
                    )}
                  </motion.button>
                )
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Profile Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-72 h-72 lg:w-80 lg:h-80"
              >
                {/* Glowing Border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-gray-400 to-white rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full p-1.5 shadow-xl border border-white/20">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/images/profile-photo.jpg" 
                      alt="Sanchit Gupta"
                      className="w-full h-full object-cover object-center"
                      style={{ imageRendering: 'high-quality' }}
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <FaCode className="text-white text-sm" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [5, -5, 5],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-gray-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <FaBrain className="text-white text-xs" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
