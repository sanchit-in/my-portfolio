import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck, FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('kjLHQPUFKeCUE8YJr'); // Initialize with your public key
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Attempting to send email...'); // Debug log
      
      // EmailJS configuration with actual credentials
      const result = await emailjs.sendForm(
        'service_kustflr', // EmailJS service ID
        'template_lbc7kze', // EmailJS template ID (auto-reply)
        formRef.current,
        'kjLHQPUFKeCUE8YJr' // EmailJS public key
      );

      console.log('EmailJS result:', result); // Debug log

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitStatus(null);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Email</h4>
                    <a 
                      href="mailto:sanchitgupta1.ai@gmail.com" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      sanchitgupta1.ai@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-lg flex items-center justify-center">
                    <FaPhone className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Phone</h4>
                    <a 
                      href="tel:+919140710681" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      +91 91407 10681
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white dark:text-black" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Gwalior, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/sanchit-gupta-a50a9625b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-lg flex items-center justify-center text-white dark:text-black hover:from-blue-700 hover:to-gray-900 transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/sanchit-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-lg flex items-center justify-center text-white dark:text-black hover:from-blue-700 hover:to-gray-900 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-800/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center space-x-3"
                >
                  <FaCheck className="text-green-600 dark:text-green-400 text-lg" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <FaTimes className="text-red-600 dark:text-red-400 text-lg" />
                    <span className="text-red-800 dark:text-red-200 font-medium">
                      Failed to send message. Please try again or contact me directly.
                    </span>
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 text-sm font-medium"
                  >
                    Dismiss
                  </button>
                </motion.div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-gray-800 hover:from-blue-700 hover:to-gray-900 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-800/50">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-gray-800 dark:from-blue-500 dark:to-gray-600 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300">Available for new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
