import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Set to true for dark theme by default

  // save preference in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
                    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
                  {/* Navbar */}
                  <Navbar />

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
