import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
    { icon: "🐍", x: "85%", y: "15%", delay: 0.5 },
    { icon: "🧠", x: "15%", y: "70%", delay: 1 },
    { icon: "📱", x: "80%", y: "75%", delay: 1.5 },
    { icon: "🎨", x: "5%", y: "45%", delay: 2 },
    { icon: "☁️", x: "90%", y: "45%", delay: 2.5 },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden animated-bg purple-particles"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-poppins mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-theme-text">K P </span>
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                Ayra Riyaz
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-theme-text-secondary mb-2">
                Full Stack Developer | AI/ML Enthusiast
              </p>
              <p className="text-lg md:text-xl text-primary-400 font-medium">
                "Building Impactful, Tech-Powered Solutions That Serve People"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <a href="public\Resume-Ayra.pdf" download>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-primary-400 hover:to-secondary-400 transition-all shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-all"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-secondary-500 text-secondary-400 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-secondary-500 hover:text-white transition-all"
              >
                <MessageCircle size={20} />
                Get in Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6"
            >
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kp-ayra-riyaz?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app.com/in/kp-ayra-riyaz",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Github,
                  href: "https://github.com/AyraRiyaz",
                  color: "hover:text-gray-400",
                },
                {
                  icon: Mail,
                  href: "mailto:riyazayra@gmail.com",
                  color: "hover:text-primary-400",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-theme-text-secondary ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
