import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Calendar, Briefcase } from "lucide-react";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { icon: Users, number: 10, suffix: "+", label: "Volunteers Managed" },
    {
      icon: Calendar,
      number: 5,
      suffix: "+",
      label: "Major Events Documented",
    },
    { icon: Briefcase, number: 2, suffix: "+", label: "Core Projects Built" },
    { icon: Award, number: 2, suffix: "+", label: "Internships Completed" },
  ];

  const Counter = ({
    target,
    suffix = "",
    duration = 2,
  }: {
    target: number;
    suffix?: string;
    duration?: number;
  }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (inView) {
        let start = 0;
        const increment = target / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    }, [inView, target, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-theme-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            About{" "}
            <motion.span
              className="text-primary-500"
              whileHover={{
                textShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
                scale: 1.1,
              }}
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              className="glass border border-theme-border rounded-xl p-8 hover-lift"
              whileHover={{
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)",
              }}
            >
              <motion.p
                className="text-theme-text-secondary text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Skilled B.Tech graduate in Computer Science and Engineering with
                practical experience in Full Stack Development, Machine
                Learning, Artificial Intelligence, Data Structures and
                Algorithms, and UI/UX Design. Proficient in Python, C, HTML, and
                CSS, with a strong passion for leveraging technology to develop
                innovative solutions to real-world problems.
              </motion.p>

              <motion.p
                className="text-theme-text-secondary text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Demonstrated leadership in managing and delivering technical
                projects effectively. Strong communicator with experience in
                documentation, social media management, and managing 10+
                volunteers.Eager to continuously learn, grow, and contribute to
                impactful, community-focused initiatives
              </motion.p>

              <motion.div
                className="text-center p-6 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-lg border border-primary-500/30 hover-glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(168, 85, 247, 0.15)",
                }}
              >
                <motion.p
                  className="text-primary-400 text-xl font-semibold italic"
                  whileHover={{
                    textShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
                  }}
                >
                  "Driven by curiosity. Powered by code. Inspired by impact."
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass border border-theme-border rounded-xl p-6 text-center hover-lift"
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: {
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        },
                      }
                    : { opacity: 0, scale: 0.5, rotate: -10 }
                }
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(168, 85, 247, 0.2)",
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4"
                  whileHover={{
                    rotate: 360,
                    backgroundColor: "rgba(168, 85, 247, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <stat.icon className="text-primary-500" size={24} />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-theme-text mb-2"
                  whileHover={{
                    scale: 1.1,
                    color: "#a855f7",
                  }}
                >
                  <Counter target={stat.number} suffix={stat.suffix} />
                </motion.div>
                <motion.p
                  className="text-theme-text-secondary text-sm"
                  whileHover={{ color: "#a855f7" }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
