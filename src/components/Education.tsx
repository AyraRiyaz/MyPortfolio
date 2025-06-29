import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const education = {
    degree: "B.Tech Computer Science and Engineering",
    institution: "MEA Engineering College",
    location: "Perinthalmanna, Kerala",
    duration: "2021 - 2025",
    cgpa: "8.63",
    status: "Final Year",
    highlights: [
      "Scholarship Winner for Academic Excellence",
      "Consistent Academic Performance",
      "Active in Technical Associations",
      "Leadership Roles in Student Organizations",
    ],
  };

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Maintained 8.63 CGPA throughout the program",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Scholarship Winner",
      description: "Recognized for outstanding academic performance",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Research Publication",
      description: "Paper published in ICCSCE 2025 conference",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-theme-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5"></div>

      {/* Floating Academic Icons */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🎓
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        📚
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            <span className="text-primary-500">Education</span> & Academics
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            Building a strong foundation in computer science with academic
            excellence and practical application
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass border border-theme-border rounded-xl p-8 hover:border-primary-500/40 transition-all duration-300"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
            }}
          >
            <div className="flex items-start mb-6">
              <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mr-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-theme-text mb-2">
                  {education.degree}
                </h3>
                <p className="text-primary-400 text-lg font-semibold mb-2">
                  {education.institution}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-theme-text-secondary">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {education.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {education.duration}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-primary-400 mb-4">
                Academic Highlights
              </h4>
              <div className="space-y-3">
                {education.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-theme-text-secondary">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-theme-text mb-6">
              Academic Achievements
            </h3>

            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass border border-theme-border rounded-xl p-6 hover:border-primary-500/40 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)",
                }}
              >
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} mr-4`}
                  >
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-theme-text mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-theme-text-secondary text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Course Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-theme-text text-center mb-8">
            Key Coursework
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Data Structures & Algorithms",
              "Machine Learning",
              "Web Development",
              "Database Management",
              "Software Engineering",
              "Computer Networks",
              "Operating Systems",
              "Artificial Intelligence",
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                className="glass border border-theme-border rounded-lg p-4 text-center hover:border-primary-500/40 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(168, 85, 247, 0.5)",
                }}
              >
                <p className="text-theme-text-secondary text-sm font-medium">
                  {course}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
