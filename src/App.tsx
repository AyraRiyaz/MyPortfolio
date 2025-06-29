import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="font-poppins bg-theme-bg min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
