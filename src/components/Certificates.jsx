import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaDownload } from "react-icons/fa";

export default function Certificates() {
  const handleDownload = (certificatePath, certificateTitle) => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = certificatePath;
    link.download = certificateTitle + '.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const certificates = [
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2024",
      image: "/images/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge.pdf",
      link: "/images/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge.pdf",
      category: "Cloud Computing"
    },
    {
      title: "Object Oriented Programming using Python",
      issuer: "Infosys",
      date: "2024",
      image: "/images/certificates/infosys Object Oriented Programming using Python.pdf",
      link: "/images/certificates/infosys Object Oriented Programming using Python.pdf",
      category: "Programming"
    },
    {
      title: "Data Structures and Algorithms using Python",
      issuer: "Infosys",
      date: "2024",
      link: "/images/certificates/infosys Data Structures and Algorithms using Python.pdf",
      image: "/images/certificates/infosys Data Structures and Algorithms using Python.pdf",
      category: "Programming"
    }
  ];

  return (
    <section id="certificates" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Plain Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-900"></div>

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
            <span className="text-white font-medium">Certifications</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">
              Professional{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-gray-300 to-white bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
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
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <FaCertificate className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                  <p className="text-blue-300 text-sm mb-2 font-medium">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs mb-4">{cert.date}</p>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-gray-700 text-white text-sm rounded-full mb-6 font-medium">
                    {cert.category}
                  </span>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      View
                    </a>
                    <button
                      onClick={() => handleDownload(cert.link, cert.title)}
                      className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 text-sm font-medium flex items-center"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
