import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "AI Intern",
      company: "ROTEN.X",
      duration: "Feb '25 - Present",
      location: "Onsite",
      description: [
        "Developing an AI-driven prosthetic hand using EMG sensors to assist individuals with limb disabilities",
        "Collected and trained models on EMG sensor data to enhance real-time muscle signal interpretation",
        "Prototyped AI-driven hand band enabling communication for non-verbal users through EMG-based gestures",
        "Trained AI models on 10,000+ EMG signals, achieving 87% accuracy in real-time muscle classification"
      ]
    },
    {
      title: "Summer Intern",
      company: "Hindustan Aeronautics Limited (HAL) – IT Department",
      duration: "July '24 - July '24",
      location: "Onsite",
      description: [
        "Developed an offline chatbot application capable of processing uploaded invoice/bill documents and answering user queries from the extracted data",
        "Utilized Mistral 7B LLM in an entirely offline environment to comply with strict data security protocols",
        "Implemented document parsing, data indexing, and local query-response pipeline for real-time information retrieval",
        "Enhanced internal data accessibility without compromising on confidentiality"
      ]
    },
    {
      title: "AI Dev – Intern",
      company: "Qapp.ai",
      duration: "May '24 - July '24",
      location: "Remote",
      description: [
        "Developed a chatbot capable of understanding and answering questions about any given HTML website",
        "Designed a clean, responsive chatbot UI using modern tools, boosting user interaction time by 30% in testing",
        "Integrated a Large Language Model (LLM) to enhance chatbot accuracy and context-awareness"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey showcasing diverse roles in AI/ML development and innovative technology solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <FaBriefcase className="mr-2 text-gray-400" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                  <div className="flex items-center text-gray-400">
                    <FaCalendarAlt className="mr-2 text-gray-400" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaMapMarkerAlt className="mr-2 text-gray-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {experience.description.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/Sanchit_gupta_resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <FaBriefcase className="mr-2" />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
