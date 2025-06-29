import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      title: "Jr. Frontend Developer",
      company: "Pro 26",
      location: "Remote",
      period: "2025 - Ongoing",
      type: "Current Role",
      description:
        "Leading frontend development for client-focused CRM system with responsive design implementation across 5+ internal modules.",
      responsibilities: [
        "Designed and implemented responsive UI components",
        "Collaborated with 9-member development team",
        "Utilized Git for version control and team coordination",
        "Optimized user experience and interface design",
      ],
      technologies: [
        "JavaScript",
        "Flutter",
        "Git",
        "Figma",
        "Dart",
        "Node.js",
        "Appwrite",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Full Stack Web Developer",
      company: "Falcon Corporate Services",
      location: "Internship",
      period: "2024",
      type: "Internship",
      description:
        "Developed cross-browser compatible UIs for enterprise internal tools with focus on performance optimization.",
      responsibilities: [
        "Built responsive web applications for enterprise use",
        "Ensured cross-browser compatibility across platforms",
        "Implemented performance optimization techniques",
        "Created intuitive user interfaces for internal dashboards",
      ],
      technologies: ["Html", "CSS", "Javascript", "Git"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "AI and Robotics Intern",
      company: "STEM Robotics International",
      location: "Kochi",
      period: "2024",
      type: "Internship",
      description:
        "Integrated machine learning algorithms into robotic simulation modules and developed automation models.",
      responsibilities: [
        "Integrated ML algorithms into robotic systems",
        "Developed 2 automation models for enhanced functionality",
        "Worked on computer vision applications",
        "Contributed to robotic simulation development",
      ],
      technologies: ["Python", "TensorFlow", "OpenCV"],
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-theme-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            Building expertise through diverse roles in full-stack development,
            AI/ML, and enterprise solutions
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-500/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-theme-bg z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } pl-12 md:pl-0`}
                >
                  <motion.div
                    className="glass border border-theme-border rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
                    }}
                  >
                    <div
                      className={`h-1 bg-gradient-to-r ${exp.gradient} mb-4 rounded`}
                    ></div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-theme-text mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <div className="flex items-center text-primary-400 font-semibold">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-theme-text-secondary text-sm">
                          <MapPin size={14} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <div className="flex items-center text-theme-text-secondary text-sm">
                          <Calendar size={14} className="mr-2" />
                          {exp.period}
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                            exp.type === "Current Role"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-theme-text-secondary mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex items-start text-sm text-theme-text-secondary"
                          >
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary-400 mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
