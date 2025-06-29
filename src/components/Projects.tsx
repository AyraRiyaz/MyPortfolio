import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Users, Calendar, Code } from "lucide-react";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    {
      title: "Epidemic Forecasting & Awareness System",
      role: "Lead Developer",
      date: "2024",
      description:
        "Disease outbreak prediction system using GRU neural networks with 32.46% MAPE accuracy. Built comprehensive backend in Django and mobile app in Flutter.",
      techStack: ["Python", "TensorFlow", "Django", "Flutter", "MySQL"],
      features: [
        "Real-time epidemic forecasting",
        "Mobile application",
        "Data visualization",
        "REST API",
      ],
      icon: "🧠",
      gradient: "from-purple-500 to-pink-600",
      github:
        "https://github.com/AyraRiyaz/Epidemic-outbreak-forecasting-and-awareness-app",
    },
    {
      title: "CRM System (Pro 26)",
      role: "Jr. Frontend Developer",
      date: "2025 - Ongoing",
      description:
        "Responsive CRM platform with 5+ internal modules. Collaborated with 9-member team using Git for version control and agile development.",
      techStack: [
        "Flutter",
        "JavaScript",
        "Git",
        "Figma",
        "Dart",
        "Node.js",
        "Appwrite",
      ],
      features: [
        "Responsive design",
        "Team collaboration",
        "Version control",
        "UI/UX optimization",
      ],
      icon: "💼",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Exam Seating Message Generator",
      role: "Full Stack Developer",
      date: "2024",
      description:
        "Automated tool for generating personalized exam seating messages for 100+ students. Streamlined administrative processes with efficient data handling.",
      techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Automated messaging",
        "Database management",
        "Admin dashboard",
        "Bulk processing",
      ],
      icon: "📋",
      gradient: "from-violet-500 to-purple-600",
      github: "https://github.com/AyraRiyaz/Exam_seating",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-theme-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Featured{" "}
            <span className="text-gradient bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            Showcasing a diverse portfolio of full-stack applications, AI/ML
            systems, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass border border-theme-border rounded-xl overflow-hidden hover:border-primary-500/40 transition-all duration-300 group"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
              }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`text-2xl mr-3 p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-theme-text group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-theme-text-secondary mt-1">
                        <Users size={14} className="mr-1" />
                        <span className="mr-3">{project.role}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-theme-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-theme-text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-all"
                    >
                      <Github size={16} />
                      Code
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
