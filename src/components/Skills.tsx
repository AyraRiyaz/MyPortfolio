import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Palette,
  Cloud,
  GitBranch,
  Smartphone,
  Brain,
  Settings,
} from "lucide-react";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "C", "HTML", "CSS", "Dart"],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: ["Django", "React", "Flutter", "Node.js"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: [
        "Figma",
        "Canva",
        "VS Code",
        "PyCharm",
        "GitHub Copilot",
        "Git",
        "Appwrite",
        "Postman",
      ],
      color: "from-violet-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-theme-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>

      {/* Floating Skill Icons */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💻
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🚀
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-theme-text mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Technical{" "}
            <motion.span
              className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent"
              whileHover={{
                scale: 1.1,
                filter: "drop-shadow(0 0 10px rgba(168, 85, 247, 0.6))",
              }}
            >
              Skills
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-theme-text-secondary text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A comprehensive toolkit spanning multiple domains of software
            development and technology
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              className="glass border border-theme-border rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300 hover-lift"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)",
                borderColor: "rgba(168, 85, 247, 0.5)",
              }}
            >
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <category.icon className="text-white" size={24} />
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-theme-text"
                  whileHover={{ color: "#a855f7" }}
                >
                  {category.title}
                </motion.h3>
              </motion.div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3"
                      whileHover={{
                        scale: 1.5,
                        boxShadow: "0 0 10px rgba(168, 85, 247, 0.6)",
                      }}
                    />
                    <motion.span
                      className="text-theme-text-secondary hover:text-primary-400 transition-colors cursor-default"
                      whileHover={{
                        scale: 1.05,
                        color: "#a855f7",
                      }}
                    >
                      {skill}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
